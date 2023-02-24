import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Nav from './components/NavBars/Nav'
import Header from './components/NavBars/Header'
import Fashion from './components/Fashion/Fashion'
const App = () => {
  return (
    <>
    <BrowserRouter>
         <Nav />
            <Routes>
                <Route index element={ <Header /> } />
                <Route path='fashion' element={ <Fashion /> } />
            </Routes>

    
    
    
    </BrowserRouter>
    
    </>
    
  )
}

export default App