import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import About from './About'
import Home from '../components/home/Home'
// import Favorites from '../components/favorites/Favorites'

// const router = createBrowserRouter([
//     {
//       path: "/market/",
//       element: <Home/>,
//       children: [
//         {
//         path: '/market/about',
//         element: <About />
//         },
//         {
//           path: '/market/favorites',
//           element: <Favorites />
//         },
//     ]
//     },
//   ])


function App() {
    return (
        <div>
          {/* <RouterProvider router={router}/> */}
          <BrowserRouter basename='/'>
            <Routes>
              <Route path='/market' element={<Home/>}/>
              <Route path='market/about/' element={<About/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App
