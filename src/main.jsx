import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
// import { StrictMode } from 'react';

import App from './App.jsx';
import Experience from './pages/experience.jsx';
import Project from './pages/project.jsx';
import Notfound from './pages/404.jsx';
import './index.css';;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/experience",
    element: (
      <Experience />
    ),
  },
  {
    path: "/project",
    element: (
      <Project />
    ),
  },
  {
    path: "*",
    element: (
      <Notfound />
    ),
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
