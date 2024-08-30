import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { Project, ProjectContextState } from "./types";
import { ProjectAction, projectReducer } from "./ProjectReducer";

export const ProjectContext = createContext<ProjectContext>({
    state: {
      projects: [],
      selectedProjects: []
    },
    dispatch: () => {}
});

type ProjectContext = {
    state: ProjectContextState,
    dispatch: Dispatch<ProjectAction>
}

type ProjectContextProviderProps = {
    children: ReactNode;
}

export function ProjectContextProvider({ children } : ProjectContextProviderProps) {
    const [state, dispatch] = useReducer(
        projectReducer,
        {
          projects: initialProjects,
          selectedProjects: []
        }
    );

    return (
        <ProjectContext.Provider value={{state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}

export function useProjects() {
    return useContext(ProjectContext);
}

const initialProjects : Project[] = [
    {
      id: 1,
      name: 'Travel to Mars',
      state: 'Launched'
    },
    {
      id: 2,
      name: 'Launching satellite',
      state: 'Finished'
    },
    {
      id: 3,
      name: 'Study: growing plants on Mars',
      state: 'Not started'
    },
    {
      id: 4,
      name: 'Study: new human generation on Mars',
      state: 'Not started'
    }
  ];
  