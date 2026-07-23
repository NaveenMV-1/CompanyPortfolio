import React from 'react'
import Header from './components/Header/Header'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Service from './Pages/Service/Service'
import Project from './Pages/Projects/Project'
function Main() {
  return (
    <React.StrictMode>
        <Header/>
        <Home/>
        <About/>
        <Service/>
        <Project/>
    </React.StrictMode>
  )
}

export default Main