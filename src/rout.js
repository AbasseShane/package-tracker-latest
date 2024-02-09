import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Add from './Add'
import Liste from './Liste'

const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Add/>}/>
            <Route path='/Liste' element={<Liste/>}/>
        </Routes>
    </>
  )
}

export default Rout