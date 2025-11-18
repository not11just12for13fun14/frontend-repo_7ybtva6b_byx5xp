import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Models from './pages/Models'
import ModelDetail from './pages/ModelDetail'
import Contact from './pages/Contact'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/modele" element={<Models/>} />
      <Route path="/modele/:slug" element={<ModelDetail/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default App
