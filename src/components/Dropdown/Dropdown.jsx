import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className='dropdown'>
      <button
        className='dropdown-toggle'
        onClick={toggleDropdown}
      >
        Grupy
      </button>
      {isDropdownOpen && (
        <div className='dropdown-menu'>
          <Link
          className='link'
          to={'/grupa-A'}
        >
          Grupa A
        </Link>
        <Link
          className='link'
          to={'/grupa-B'}
        >
          Grupa B
        </Link>
        <Link
          className='link'
          to={'/grupa-C'}
        >
          Grupa C
        </Link>
        <Link
          className='link'
          to={'/grupa-D'}
        >
          Grupa D
        </Link>
        </div>
      )}
    </div>
  )
}

export default Dropdown
