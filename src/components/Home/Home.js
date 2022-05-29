import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import Services from '../Service/Service'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
        <Layout>
          <section className='bg-sky-600 py-80 w-full'>
              <div className='lg:container mx-auto flex justify-center'>
                  <div className='text-white text-center'>
                      <h1 className='text-4xl mb-2'>Hello World!</h1>
                      <p className='text-2xl text-gray-800'>First time using react</p>
                  </div>
              </div>
          </section>

          <section className='mt-16'>
            <div className='lg:container mx-auto'>
              <div className='text-center'>
                <h3 className='common_head'>About us</h3>
                <p className='p_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <Link className='btn' to='/about'>read more</Link>
              </div>
            </div>
          </section>
          <Services/>
        </Layout>
    )
    
  }
}