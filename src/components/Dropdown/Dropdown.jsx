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
        
        </div>
      )}
    </div>
  )
}

export default Dropdown
