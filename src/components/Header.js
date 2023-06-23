import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [show, setShow] = useState(false);
  return (
    <header className='bg-black text-white flex justify-between px-4 py-2'>
      <div>
        <NavLink to="/"><h1 className='text-2xl mb-2'>Sample Web</h1></NavLink>



        {show && <nav className='flex flex-col space-y-2'>
          <NavLink to='/infoForm'>Add Form</NavLink>

        </nav>
        }
      </div>

      <button onClick={() => setShow(!show)}>
        {show ?

          <i class="fa-solid fa-xmark hidden sm:flex"></i> :
          <i className="fa-solid fa-bars hidden sm:flex" ></i>

        }</button>
      <nav className='sm:hidden'>
        <NavLink to="/infoForm">Add Form</NavLink>
      </nav>

    </header >
  )
}

export default Header
