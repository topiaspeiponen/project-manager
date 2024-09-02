import 'react'
import { Project } from './types';
import styles from './ProjectListItem.module.css';
import { useProjects } from './ProjectContextUtils';
import classNames from 'classnames';

type ProjectListItemProps = {
    project: Project;
    selected: boolean;
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

    const stateClass = classNames({
      [styles['state-not-started']]: project.state === 'Not started',
      [styles['state-launched']]: project.state === 'Launched',
      [styles['state-finished']]: project.state === 'Finished',
    })

    const handleKeyDown = (event : React.KeyboardEvent<HTMLLIElement>) => {
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
        <div className={styles['state-container']}>
          <p>{project.state}</p>
          <span className={stateClass}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </span>
        </div>
      </li>
    )
  }
  
  export default ProjectListItem;