import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Footer from './components/Footer'
import Cart from './screens/Cart'
import PageNotFound from './screens/PageNotFound'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App