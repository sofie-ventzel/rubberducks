import { useState } from 'react'

import Home from './Pages/Home'
import Search from './Pages/Search'
import Form from './Pages/Form'
import Findings from './Pages/Findings'

import Header from './Componants/Header'
import Footer from './Componants/Footer'

function App() {

  const [page, setPage] = useState('home')
  // adding a prop
  const brand = 'Community Run, Community Owned!'

  // switch function to take a case dependant on the changes of a click listener in header
  const handlePageView = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'search':
        return <Search />;
      case 'form':
        return <Form />
      case 'findings':
        return <Findings />
    }
  }


  return (
    <>
      <Header brand={brand} setPage={setPage} />
      {handlePageView()}
      <Footer />
    </>
  );
}

export default App;
