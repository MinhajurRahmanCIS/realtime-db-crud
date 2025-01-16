import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Write from './componenets/Write'
import Read from './componenets/Read'
import UpdateRead from './componenets/UpdateRead'

function App() {

  const router =createBrowserRouter([
    {
      path: "/",
      element: <Write/>
    },
    {
      path: "/read",
      element: <Read/>
    },
    {
      path: "/update-read",
      element: <UpdateRead/>
    }
  ])

  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  )
}

export default App
