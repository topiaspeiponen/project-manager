import Button from "./Button";
import { useProjects } from "./ProjectContext";
import ProjectList from "./ProjectList";
import styles from './ProjectManager.module.scss';


function ProjectManager() {
  const { state, dispatch } = useProjects();

  const launchProject = () => {
    dispatch({
        type: 'LAUNCH',
        payload: {
            projects: state.selectedProjects
        }
    })
  };

  const finishProject = () => {
    dispatch({
        type: 'FINISH',
        payload: {
            projects: state.selectedProjects
        }
    })
  };

    return (
        <>
            <ProjectList projects={state.projects} selectedProjects={state.selectedProjects} />
            <div className={styles['button-container']}>
                <Button
                    disabled={
                        state.selectedProjects.some(proj => proj.state === 'Launched') || state.selectedProjects.length === 0}
                    variant="primary"
                    onClick={launchProject}
                    label="Launch project" />
                <Button
                    disabled={state.selectedProjects.length === 0}
                    variant="secondary"
                    onClick={finishProject}
                    label="Finish project" />
            </div>
        </>
    )
}

export default ProjectManager;