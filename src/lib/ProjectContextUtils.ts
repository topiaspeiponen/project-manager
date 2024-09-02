import { createContext, Dispatch, useContext } from "react";
import { ProjectContextState } from "./types";
import { ProjectAction } from "./ProjectReducer";

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

export function useProjects() {
    return useContext(ProjectContext);
}