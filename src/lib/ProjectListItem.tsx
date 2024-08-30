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
      [styles.selected]: selected
    });

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
      <li className={classes} onClick={selectItem}>
        <h2>{project.name}</h2>
        <p>{project.state}</p>
      </li>
    )
  }
  
  export default ProjectListItem;