import About from './About_Us/About'
import Blog from './Blog/Blog'
import Header from './components/Header'
import HowItWorks from './components/How_It_Works'
import WhyChooseUs from './components/Why_Choose_Us'
import Features from './Features/Features'
import DownloadApp from './shared/DownloadApp'
import Footer from './shared/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <WhyChooseUs />
              <HowItWorks />
              <DownloadApp />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Features />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
