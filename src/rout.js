import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import Add from './Add'
import Liste from './Liste'
import Step2 from './step2'
import Step3 from './step3'


const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path="/add" element={<Add />}/>
            <Route path='/Liste' element={<Liste/>}/>
            <Route path='/Step2' element={<Step2/>}/>
            <Route path='/Step3' element={<Step3/>}/>
        </Routes>
    </>
  )
}

export default Rout