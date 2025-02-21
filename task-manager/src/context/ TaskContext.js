import React, { createContext, useReducer, useContext, useMemo, useCallback } from 'react';


const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';


const initialState = {
  tasks: []
};


const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] };

    case REMOVE_TASK:
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };

    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };

    default:
      return state;
  }
};


const TaskContext = createContext();

// Task Provider Component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};


export const useTasks = () => {
  return useContext(TaskContext);
};
