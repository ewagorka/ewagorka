import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import { Footer, Navbar } from './components';
import { MyWork, Contact, Home, Revolancer, DesignSystemAndGuidelines, PlusPage, HibernianFC } from './pages';
import "../src/index.css"

//Spring
import {useSpring, animated} from "@react-spring/web";


const App = () => {
  const fade = useSpring({
    from:{
      opacity:0
    },
    to: {
      opacity: 1
    },
    config: { tension: 50, friction: 10 },
  })

  return (
    <Router>
      <animated.main style={fade}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myWork" element={<MyWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path ="/revolancer" element={<Revolancer />} />
            <Route path ="/designSystemAndGuidelines" element={<DesignSystemAndGuidelines />} />
            <Route path ="/pluspage" element={<PlusPage />} />
            <Route path ="/hibernianFC" element={<HibernianFC />} />
          </Routes>
        <Footer />
      </animated.main>
    </Router>
  )
}

export default App