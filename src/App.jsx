
import './App.css'

import Galeri from './components/Galeri'
import Blog from './components/Blog'
import Iletisim from './components/Iletisim'
import Navi from './components/Navi'
import Anasayfa from './components/Anasayfa'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'
import GaleriDetay from './components/GaleriDetay'
import BlogDetay from './components/BlogDetay'


function App() {
 

  return (
    <>
      <BrowserRouter>

      <Routes> 
        <Route path='/*' element={<LoadingPage />}/> 
        <Route path='/online-6' element={<Navi />} >
        <Route path='anasayfa' element={<Anasayfa />} />
        <Route path='galeri' element={<Galeri />} />
        <Route path='galeri/:galeriID' element={<GaleriDetay />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:blogID' element={<BlogDetay />} />
        <Route path='iletisim' element={<Iletisim />} />
        </Route>
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
