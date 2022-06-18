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
       if(this.state.value !== 0){
        this.setState( state => {
            return {
                value: state.value - 10,
            }
        })
       } else{
           this.setState( () => {
               return{
                   value: 0
               }
           })
       }
    }
  render() {
    return (
      <section className='sm:container mx-auto text-center py-16'>
        <h1 className='common_head'>Counter</h1>
        <p className='p_text capitalize'>value: {this.state.value}</p>
        <div>
            <button onClick={this.increase} className='increament_btn'>Increase</button>
            <button onClick={this.decrease} className='increament_btn'>Decrease</button>
        </div>
      </section>
    )
  }
}
