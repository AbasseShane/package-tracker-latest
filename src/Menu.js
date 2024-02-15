import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Menu() {

    
  return (
    <>  
        
            <div className='header'>Menu</div>
            <div className='content'>
                <div className='menu-buttons'>
                    <Link to='/Add' className='liste-menu-link'>Entrer Infos</Link>
                    <Link to='/Liste' className='liste-menu-link'>Step 1</Link>
                    <Link to='/Step2' className='liste-menu-link'>Step 2</Link>
                    <Link to='/Step3' className='liste-menu-link'>Step 3</Link>
                </div>
            </div>
        
    </>
    
  )
}

export default Menu