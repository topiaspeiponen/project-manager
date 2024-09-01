import 'react'
import { Project } from './types';
import styles from './ProjectListItem.module.css';
import { useProjects } from './ProjectContext';
import classNames from 'classnames';

type ProjectListItemProps = {
    project: Project;
    selected: Boolean;
}

function ProjectListItem(props: ProjectListItemProps) {
    const { dispatch } = useProjects();
    const { project, selected } = props;

    const classes = classNames({
      [styles.container]: true,
      [styles.selected]: selected,
      [styles.finished] : project.state === 'Finished',
      [styles.selectable]: project.state !== 'Finished'
    });

    const handleKeyDown = (event : React.KeyboardEvent<HTMLLIElement>) => {
      console.log('element is the active element ', event.code)
      if (event.code === 'Enter') selectItem();
    }

    const selectItem = () => {
        if (project.state !== 'Finished') {
          dispatch({
            type: 'SELECT',
            payload: {
              projects: [project]
            }
          })
        }
    }

    return (
      <li
        className={classes}
        onClick={selectItem}
        onKeyDown={(event) => handleKeyDown(event)}
        tabIndex={project.state !== 'Finished' ? 0 : 1}>
        <h2>{project.name}</h2>
        <p>{project.state}</p>
      </li>
    )
  }
  
  export default ProjectListItem;