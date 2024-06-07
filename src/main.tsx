import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About.tsx'


// const router = createHashRouter([
//   {
//     path: "#/market/",
//     element: <App />,
//     children: [
//       {
//         path: "#/market/",
//         element: <App />,
//       },
//       {
//         path: "#/market/about",
//         element: <About />,
//       },
//     ],
//   },
// ])


export const rootElement = ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <HashRouter basename="/market/">
      <Routes>
        <Route path="/market/" element={<App />}/>
        <Route path="/market/#/about" element={<About />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)

