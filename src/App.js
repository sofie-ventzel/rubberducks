import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Form from './Pages/Form'
import Findings from './Pages/Findings'
import HowTo from './Pages/HowTo'
import Moderator from './Pages/Moderator'
import Header from './Componants/Header'
import Footer from './Componants/Footer'



function App() {

  // adding a prop
  const brand = 'Community Run, Community Owned!'

  // sending selected bird to the findings componant for loading of only that bird

  return (
    <>

      <Header brand={brand} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Findings" element={<Findings />} />
        <Route path="/HowTo" element={<HowTo />} />
        <Route path="/Moderator" element={<Moderator />} />
      </Routes>
    </>
  );
}

export default App;
