import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <HashRouter basename='/market/'>
     <Routes>
        <Route path='/market/' element={ <App/> }/>
        <Route path='/market/about' element={ <About/> }/>
      </Routes>
     </HashRouter>
  </React.StrictMode>,
)
