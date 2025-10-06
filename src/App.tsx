import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Vagons from './pages/Vagons'
import Gallery from './pages/Gallery'
import Header from './components/Header'
import Vagon from './pages/Vagon'

function App() {

  return (
    <>
      <Header />
      
      <Routes >
        <Route path="/" element={<Index />} />
        <Route path="/vagons" element={<Vagons />} />
        <Route path="/gallery" element={< Gallery />} />
        <Route path="/vagons/:id" element={<Vagon />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
