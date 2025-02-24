import React, { useCallback } from 'react';
import { useTasks } from '../context/ TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useTasks();


  const toggleTask = useCallback(() => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  }, [dispatch, task.id]);

  const removeTask = useCallback(() => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  }, [dispatch, task.id]);

  return (
    <li>
      <span 
        onClick={toggleTask} 
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {task.text}
      </span>
      <button onClick={removeTask}>❌</button>
    </li>
  );
};

export default TaskItem;
