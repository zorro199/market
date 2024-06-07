import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About'
import Home from '../components/home/Home'
import Favorites from '../components/favorites/Favorites'

const router = createBrowserRouter([
    {
      path: "/market/",
      element: <About />,
      children: [
        {
          path: "/market/",
          element: <Home />,
        },
        {
          path: "/market/about",
          element: <About />,
        },
        {
          path: "/market/favorites",
          element: <Favorites />,
        },
      ],
    },
  ])

function App() {
    return (
        <div>
            <RouterProvider router={router}/> 
        </div>
    )
}
export default App