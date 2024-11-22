import "./assets/css/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ContactUS from "./pages/ContactUS"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={< ContactUS/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
