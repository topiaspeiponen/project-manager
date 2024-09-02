import {  ReactNode, useReducer } from "react";
import { Project } from "./types";
import { projectReducer } from "./ProjectReducer";
import { ProjectContext } from "./ProjectContextUtils";

type ProjectContextProviderProps = {
    children: ReactNode;
}

export default function ProjectContextProvider({ children } : ProjectContextProviderProps) {
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

/*const initialProjectsLong : Project[] = [
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
    },{
      id: 5,
      name: 'Study: new human generation on Mars',
      state: 'Not started'
    },
    {
      id: 6,
      name: 'Study: new human generation on Mars',
      state: 'Not started'
    },
    {
      id: 7,
      name: 'Study: new human generation on Mars',
      state: 'Not started'
    }
  ];*/
  