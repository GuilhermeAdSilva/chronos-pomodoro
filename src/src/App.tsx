import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { TaskContext, TaskContextProvider } from './contexts/TaskContext';
import { useContext } from 'react';

export function App() {

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
