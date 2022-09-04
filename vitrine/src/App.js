import React from "react";
import "./App.css"
import { 
  Routes,
  Route
  }from "react-router-dom"
import Home from "./container/Accueil/Home.jsx"
import Story from "./container/Historique/Story.jsx"
import Catalog from "./container/Catalogue/Catalog.jsx"
import Contact from "./container/Contact/Contact.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="story" element={<Story/>}/>
      <Route path="catalog" element={<Catalog/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
