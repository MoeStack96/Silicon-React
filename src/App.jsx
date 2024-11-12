import "./assets/css/styles.css"
import Brands from "./components/Brands"
import FAQ from "./components/FAQ"
import FeatureGrid from "./components/FeatureGrid"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Slider from "./components/Slider"
import Subscribe from "./components/Subscribe"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Features/>
      <Slider/>
      <FeatureGrid/>
      <Testimonials/>
      <FAQ/>
      <Subscribe/>


      <Footer/>
    </>
  )
}

export default App
