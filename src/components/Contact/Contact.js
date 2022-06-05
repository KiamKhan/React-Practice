import React, { Component } from 'react'
import Layout from '../Layout/Layout'

export default class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            fname: '',
            lname: '',
            full_name: ''
        }
    }

    handleInput = e => {
        console.log(e.target.value)

        this.setState(state =>{
            return {
                [e.target.name]: e.target.value
            }
        })
    }

    submit = e =>{
        e.preventDefault();
        
        this.setState(state =>{
            return{
                full_name: state.fname + ' ' + state.lname,
            }
        })
    }
  render() {
    return (
      <Layout>
          <section className='h-screen flex items-center justify-center'>
            <div className='form_container w-96'>
                <form onSubmit={this.submit} className="w-full">
                    <h2 className='text-center common_head'>Login</h2>
                    <label className='block text-lg'>Enter your name</label>
                    <div className='flex mt-8'>
                        <input name='fname' onChange={e => {this.handleInput(e)}} value={this.state.fname} className='mr-4 input' type="text" placeholder='First name'/>
                        <input name='lname' onChange={e => {this.handleInput(e)}} value={this.state.lname}  className='input' type="text" placeholder='Last Name'/>
                    </div>

                    <button className='btn mx-auto block mt-12'>Submit</button>
                </form>

                <p className='mt-16 text-2xl text-black'>Full name: <span className='text-[#353535] capitalize'>{this.state.full_name}</span></p>
            </div>
          </section>
      </Layout>
    )
  }
}
