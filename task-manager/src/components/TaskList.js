import React, { useMemo } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useTasks();

 
  const completedTasksCount = useMemo(() => {
    return state.tasks.filter(task => task.completed).length;
  }, [state.tasks]);

  return (
    <div>
      <h2>Tasks</h2>
      <p>Completed Tasks: {completedTasksCount}</p>
      <ul>
        {state.tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
