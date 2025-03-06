import React from 'react'
import Header from './Sections/Header';
import Routes from "./routes/Routes";
import Footer from './Sections/Footer';

import "./App.css"
const App = () => {
  return (
    
    <div className="flex flex-col h-screen">
    <Header/>
       <Routes />
       <Footer/>
      </div>
 
  )
}

export default App