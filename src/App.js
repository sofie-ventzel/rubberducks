import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Search from './Pages/Search'
import Form from './Pages/Form'
import Findings from './Pages/Findings'

import Header from './Componants/Header'
import Footer from './Componants/Footer'



function App() {

  // adding a prop
  const brand = 'Community Run, Community Owned!'



  // switch function to take a case dependant on the changes of a click listener in header


  return (
    <>

      <Header brand={brand} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Findings" element={<Findings />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
