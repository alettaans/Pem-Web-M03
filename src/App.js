import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Menu";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home></Home>;
      break;

    case "/about":
      component = <AboutUs></AboutUs>;
      break;

    case "/contact":
      component = <Contact></Contact>;
      break;
  }
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      {component}
      <Footer></Footer>
    </>
  );
}

export default App;
