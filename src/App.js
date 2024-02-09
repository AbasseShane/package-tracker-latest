import React from 'react'
import Add from './Add'
import Liste from './Liste'
import { BrowserRouter } from 'react-router-dom'
import Rout from './rout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Rout/> 
      </BrowserRouter>
    </>
  )
}

export default App