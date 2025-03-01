import React from 'react'
import Header from './components/Header'
import {Routes, Route} from 'react-router'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route path='/all' element={<Read />} />
        <Route path='/:id' element={<Update />} />
      </Routes>
    </>
  )
}

export default App