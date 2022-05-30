import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {
  render() {
    return (
      <nav className='absolute top-0 left-0 w-full bg-black/60 py-9 z-50'>
          <div className='lg:container mx-auto flex'>
              <div className='basis-1/4'><Link className='inline-block text-white font-bold text-3xl' to='/'>Logo</Link></div>
              <div className='basis-3/4'>
                  <ul className='flex justify-end'>
                      <li><Link className='nav-link' to='/'>Home</Link></li>
                      <li><Link className='nav-link' to='/about'>About</Link></li>
                      <li><Link className='nav-link' to='#'>Services</Link></li>
                      <li><Link className='nav-link' to='#'>Portfolio</Link></li>
                      <li><Link className='nav-link' to='#'>Journal</Link></li>
                      <li><Link className='nav-link' to='#'>Contact</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}