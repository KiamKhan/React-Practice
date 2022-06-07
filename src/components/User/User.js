import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            age: '',
            country: ''
        }
    }

    handleInput = e =>{
        this.setState((state) =>{
            return {
              [e.target.name]: e.target.value
            }
        })
    }

    updateAge = newAge => {
        this.setState(state => {
            return{
                age: newAge
            }
        })
    }

  render() {
    return (
      <section className='text-center py-16 bg-slate-100'>
        <div className='lg:container mx-auto'>
            <h1 className='common_head'>
                User Info
            </h1>

            <div className='my-8'>
                <input onChange={this.handleInput} name='name' type="text" value={this.state.name} placeholder="Enter your name" className='input'/>
                <input onChange={this.handleInput} name='age' type="number" value={this.state.age} placeholder="Enter your age" className='input mx-4'/>
                <input onChange={this.handleInput} name='country' type="text" value={this.state.country} placeholder="Country" className='input'/>
            </div>

            <div>
                <p className='capitalize'>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p className='capitalize'>Country: {this.state.country}</p>
            </div>

            <button onClick={() => {this.updateAge(50)}} className='btn'>update age to 50</button>
        </div> 
      </section>
    )
  }
}
