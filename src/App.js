import './App.css';
import React, { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Menu } from './components/Menu'
import Home from './components/Home'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from './components/Scroltotop'
import LoadingBar from 'react-top-loading-bar'
import { AppProvider } from './context/Context';
import Aleart from './components/Aleart';

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header setProgress={setProgress} />
        <LoadingBar
          height={4}
          color='#EA6D27'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="d-flex justify-content-center">
          <Aleart />
        </div>
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} />}></Route>
          <Route exact path="/menu" element={<Menu tittle='Our Restaurant Serves' />}></Route>
          <Route exact path="/blog" element={<Gallery />}></Route>
          <Route exact path="/about" element={<About tittle='About Us' />}></Route>
          <Route exact path="/contact" element={<Contact tittle='Get in Touch' />}></Route>
        </Routes>
        <Footer setProgress={setProgress} />
      </BrowserRouter>
    </AppProvider>
  );
}
export default App;