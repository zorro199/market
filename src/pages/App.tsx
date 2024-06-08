import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import About from './About'
import Home from '../components/home/Home'
import Favorites from '../components/favorites/Favorites'

function App() {
    return (
        <div>
          <BrowserRouter basename='/'>
            <Routes>
              <Route path='/market' element={<Home/>}/>
              <Route path='/market/about/' element={<About/>}/>
              <Route path='/market/favorites/' element={<Favorites/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App
