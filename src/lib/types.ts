export type ProjectContextState = {
  projects: Project[];
  selectedProjects: Project[];
};

export type ProjectState = 'Not started' | 'Launched' | 'Finished';

export type Project = {
    id: number;
    name: string;
    state: ProjectState;
}