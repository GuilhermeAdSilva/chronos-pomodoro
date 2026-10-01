import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContext } from '../../contexts/TaskContext';
import { useTaskContext } from '../../App';

export function CountDown() {
  const taskContext = useTaskContext;
  console.log(taskContext);
  return (
    <div className={styles.container}>
      00:00
    </div>
  );
}
