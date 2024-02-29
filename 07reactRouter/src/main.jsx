import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github, { githubInfo } from './components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/" element={<User />} >
        <Route path=":userid" element={<User />} />
      </Route>
      <Route
        loader={githubInfo}
        path="github"
        element={<Github />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
