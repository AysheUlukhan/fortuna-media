import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Footer from "./layout/Footer"
import ServicesDetail from "./pages/ServicesDetail"
import PortfolioDetail from "./pages/PortfolioDetail"
import BlogDetail from "./pages/BlogDetail"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetail/:id" element={<BlogDetail/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicesDetail" element={<ServicesDetail/>}/>
        <Route path="/portfolioDetail/:id" element={<PortfolioDetail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
