import 'react'
import styles from './ProjectList.module.css'
import ProjectListItem from './ProjectListItem';
import { Project } from './types';

type ProjectListProps = {
    projects: Project[],
    selectedProjects: Project[]
}

function ProjectList(props: ProjectListProps) {
    const { projects, selectedProjects } = props;
    return (
        <ul className={styles['list-container']}>
            {projects.map((project) => (
                <ProjectListItem
                    key={project.id}
                    project={project}
                    selected={selectedProjects.some(selected => selected.id === project.id)} />
            ))}
        </ul>
    )
}

export default ProjectList;