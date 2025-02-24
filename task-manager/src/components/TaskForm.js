import React, { useState, useCallback } from 'react';

import { useTasks } from '../context/TaskContext'; 


const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTasks();


  const addTask = useCallback(() => {
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  }, [taskText, dispatch]);

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
