import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About'
import Home from '../components/home/Home'

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
          path: "http://localhost:5173/market/market/about",
          element: <About />,
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