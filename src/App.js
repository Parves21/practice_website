import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Router/Routes';

function App() {
  return (
    <div id='AppBody'>
     <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
