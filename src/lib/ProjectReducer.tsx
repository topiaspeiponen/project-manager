import { Project, ProjectContextState } from "./types";


export type ProjectAction = {
    type: 'SELECT' | 'LAUNCH' | 'FINISH',
    payload: {
        projects: Project[]
    }
}

export function projectReducer(state: ProjectContextState, action: ProjectAction): ProjectContextState {
    switch (action.type) {
        case 'SELECT': {
            const currentState = state;

            if (currentState.selectedProjects.length === 0) {
                return {
                    ...state,
                    selectedProjects: action.payload.projects
                }
            }

            for (const project of currentState.selectedProjects) {
                if (project.state !== action.payload.projects[0].state) {
                    // If previously selected projects have different status, reset the selection array
                    return {
                        ...state,
                        selectedProjects: action.payload.projects
                    }
                } else if ( project.id === action.payload.projects[0].id) {
                    // If project ID is found already in selected, deselect it
                    return {
                        ...state,
                        selectedProjects: state.selectedProjects.filter(selectedProject => selectedProject.id !== action.payload.projects[0].id)
                    }
                }
            }

            return {
                ...state,
                selectedProjects: [
                    ...state.selectedProjects,
                    action.payload.projects[0]
                ]
            }
        }
        case 'LAUNCH': {
            const currentState = state;

            const newProjects = currentState.projects.map(project => {
                if (action.payload.projects.find(payloadProject => payloadProject.id === project.id)) {
                    const newProject: Project = {
                        ...project,
                        state: 'Launched'
                    }
                    return newProject;
                }
                return project
            })
            return {
                selectedProjects: [],
                projects: newProjects
            };
        }
        case 'FINISH': {
            const currentState = state;

            const newProjects = currentState.projects.map(project => {
                if (action.payload.projects.find(payloadProject => payloadProject.id === project.id)) {
                    const newProject: Project = {
                        ...project,
                        state: 'Finished'
                    }
                    return newProject;
                }
                return project
            })

            return {
                selectedProjects: [],
                projects: newProjects
            };
        }
        default:
            return state;
    }
}
