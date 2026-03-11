import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar.jsx';
import Header from './components/header.jsx';
import Project from './components/project.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Location from './components/location.jsx';
import Footer from './components/footer.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Navbar/>
  <Header/>
  <Project/>
  <About/>
  <Contact/>
  <Location/>
  <Footer/>
  </>
)


