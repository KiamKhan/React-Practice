import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <section className=' bg-slate-100 py-16'>
          <div className='lg:container mx-auto'>
              <div>
                <h3 className='common_head'>our services</h3>
              </div>

              <div className='grid grid-cols-3 gap-x-6 mt-6'>
                <div className='text-center'>
                    <h4 className='secondary_head'>graphic design</h4>
                    <p className='p_text text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='text-center'>
                    <h4 className='secondary_head'>web design</h4>
                    <p className='p_text text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='text-center'>
                    <h4 className='secondary_head'>web development</h4>
                    <p className='p_text text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
          </div>
      </section>
    )
  }
}