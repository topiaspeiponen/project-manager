import Button from "./Button";
import { useProjects } from "./ProjectContext";
import ProjectList from "./ProjectList";


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
            <Button onClick={launchProject} label="Launch project" />
            <Button onClick={finishProject} label="Finish project" />
        </>
    )
}

export default ProjectManager;