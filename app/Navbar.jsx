import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar__content">
        <Link href={'/'} className='navbar__link'>Slide 3D</Link>
        <Link href={'/slide-normal'} className='navbar__link'>Slide Normal</Link>
        <Link href={'/slide-coverflow'} className='navbar__link'>Slide Coverflow</Link>
        <Link href={'/time'} className='navbar__link'>Time</Link>
      </div>
    </nav>
  )
}

export default Navbar