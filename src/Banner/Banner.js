import React, { Component } from 'react'
import '../images/banner.jpg'

export default class Banner extends Component {
  render() {
    return (
        <section className='bg-sky-600 py-80 w-full'>
            <div className='lg:container mx-auto flex justify-center'>
                <div className='text-white text-center'>
                    <h1 className='text-4xl mb-2'>Hello World!</h1>
                    <p className='text-2xl text-gray-800'>First time using react</p>
                </div>
            </div>
        </section>
    )
    
  }
}
