import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import UserForm from './components/UserForm.jsx'
import UserList from './components/UserList.jsx'
const router = createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
      {index:true , element:<Home/>},
      {path:'add' , element:<UserForm/>},
      {path:'view' , element:<UserList/>},

    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>,
)
