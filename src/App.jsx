import { Routes, Route, Navigate } from "react-router-dom"
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
import NotFound from "./pages/NotFound"
import GoToTop from "./components/GoToTop"
import { ToastContainer } from "react-toastify"
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <ToastContainer
          position="top-right"
          autoClose={3200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          draggable
          theme="light"
        />
        <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetail/:id" element={<BlogDetail/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicesDetail/:id" element={<ServicesDetail />} />
        <Route path="/portfolioDetail/:id" element={<PortfolioDetail/>}/>
        <Route path="*" element={<Navigate replace to="/404" />}/>
        <Route path="/404" element={<NotFound/>}/>
      </Routes>
      <GoToTop/>
      <Footer/>
    </>
  )
}

export default App
