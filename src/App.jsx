import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Robo from './Robo'
import Home from './Home'
import Projects from './Projects'
import AOS from 'aos'
import Contact from './Contact'
import Footer from './Fotter'
  
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
     
        <Robo />
    
        <Projects />
        <Home />
        <Contact />
        <Footer />
  
    </>
  )
}

export default App
