import React, { Component } from 'react'
import Layout from '../Layout/Layout'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <section className='py-60 bg-slate-100'>
        <div className='lg:container mx-auto'>
          <div>
            <h2 className='text-4xl font-bold text-gray-600 capitalize mb-4 text-center '>about us</h2>
          </div>

          <div className='text-center'>
            <p className='p_text'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

              <span className='block mt-8'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </span>
            </p>
          </div>
        </div>
        </section>
      </Layout>
    )
  }
}
