import React, { Component } from 'react'

export default class Increament extends Component {
    state = {
        value: 0,
    }

    increase = () => {
       this.setState(() => {
           return {
               value: this.state.value + 10,
           }
       })
    }

    decrease = () => {
       this.setState((state, props) => {
           return {
               value: state.value - 10,
           }
       })
    }
  render() {
    return (
      <section className='lg:container mx-auto text-center py-16'>
        <h1 className='common_head'>Counter</h1>
        <p className='p_text capitalize'>value: {this.state.value}</p>
        <div>
            <button onClick={this.increase} className='text-white font-semibold py-4 px-8 bg-red-400 cursor-pointer rounded mt-4 mx-1'>Increase</button>
            <button onClick={this.decrease} className='text-white font-semibold py-4 px-8 bg-red-400 cursor-pointer rounded mt-4 mx-1'>Decrease</button>
        </div>
      </section>
    )
  }
}
