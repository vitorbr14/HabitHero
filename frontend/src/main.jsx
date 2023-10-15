import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/Register'
import AddNew from './pages/AddNew'
import Edit from './pages/Edit'
import {UserNameProvider} from './context/UserContext'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "new",
    element: <AddNew />
  },
  {
    path: "edit/:id",
    element: <Edit />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameProvider>
      <RouterProvider router={router} />
    </UserNameProvider>
  </React.StrictMode>,
)
