import React, { Component } from 'react'

export default class Main_menu extends Component {
  render() {
    return (
      <nav className='absolute top-0 left-0 w-full bg-black/60 py-9 z-50'>
          <div className='lg:container mx-auto flex'>
              <div className='basis-1/4'><a className='inline-block text-white font-bold text-3xl' href='#'>Logo</a></div>
              <div className='basis-3/4'>
                  <ul className='flex justify-end'>
                      <li><a className='nav-link' href='#'>Home</a></li>
                      <li><a className='nav-link' href='#'>About</a></li>
                      <li><a className='nav-link' href='#'>Services</a></li>
                      <li><a className='nav-link' href='#'>Portfolio</a></li>
                      <li><a className='nav-link' href='#'>Journal</a></li>
                      <li><a className='nav-link' href='#'>Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}
