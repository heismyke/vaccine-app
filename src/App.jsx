import React from 'react'
import About from './About_Us/About'
import Header from './components/Header'
import Blog from './Blog/Blog'
import HowItWorks from './components/How_It_Works'
import WhyChooseUs from './components/Why_Choose_Us'
import WhyWeGetVaccinated from './components/Why_We_Get_Vaccinated'
import Features from './Features/Features'
import DownloadApp from './shared/DownloadApp'
import Footer from './shared/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeaturesContextProvider from './context/FeaturesContextProvider'
import FeaturesPagination from './components/FeaturesPagination'
import WhatOurUsersSay from './components/What_Our_Users_Say'
import WhatOurUsersSayContextProvider from './context/WhatOurUsersSayContextProvider'
import BlogContextProvider from './context/BlogContextProvider'
import MeetTheTeam from './About_Us/components/Meet_the_team'

function App() {
  return (
    <FeaturesContextProvider>
      <WhatOurUsersSayContextProvider>
        <BlogContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <WhyChooseUs />
                    <HowItWorks />
                    <FeaturesPagination />
                    <WhyWeGetVaccinated />
                    <WhatOurUsersSay />
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
                    <MeetTheTeam />
                    <DownloadApp />
                    <Footer />
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
        </BlogContextProvider>
      </WhatOurUsersSayContextProvider>
    </FeaturesContextProvider>
  )
}

export default App
