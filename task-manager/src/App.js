import React from 'react';
import { TaskProvider } from './context/ TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
