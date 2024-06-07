import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About'
import Home from '../components/home/Home'
import Favorites from '../components/favorites/Favorites'

const router = createBrowserRouter([
    {
      path: "/market/",
      element: <Home />,
      children: [
        {
          path: "/market/",
          element: <Home />,
        },
        {
          path: "https://zorro199.github.io/market/about",
          element: <About />,
        },
        {
          path: "https://zorro199.github.io/market/favorites",
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