import About from "./About_Us/About";
import Blog from "./Blog/Blog";
import Header from "./components/Header";
import HowItWorks from "./components/How_It_Works";
import WhyChooseUs from "./components/Why_Choose_Us";
import WhyWeGetVaccinated from "./components/Why_We_Get_Vaccinated";
import Features from "./Features/Features";
import DownloadApp from "./shared/DownloadApp";
import Footer from "./shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesContextProvider from "./context/FeaturesContextProvider";
import FeaturesPagination from "./components/FeaturesPagination";

function App() {
  return (
    <FeaturesContextProvider>
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
    </FeaturesContextProvider>
  );
}

export default App;
