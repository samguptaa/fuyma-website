import { HashRouter as BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Engineering from './pages/Engineering'
import Production from './pages/Production'
import Quality from './pages/Quality'
import QualityPolicy from './pages/QualityPolicy'
import Products from './pages/Products'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Videos from './pages/Videos'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="min-h-screen" style={{ background: '#09090A' }}>
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/about"         element={<About />} />
          <Route path="/engineering"   element={<Engineering />} />
          <Route path="/production"    element={<Production />} />
          <Route path="/quality"       element={<Quality />} />
          <Route path="/quality-policy" element={<QualityPolicy />} />
          <Route path="/products"      element={<Products />} />
          <Route path="/careers"       element={<Careers />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/videos"        element={<Videos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  )
}
