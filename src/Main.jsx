import React from 'react'
import Header from './components/Header/Header'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
function Main() {
  return (
    <React.StrictMode>
        <Header/>
        <Home/>
        <About/>
    </React.StrictMode>
  )
}

export default Main