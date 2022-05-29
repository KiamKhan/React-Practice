import React, { Component } from 'react'
import Main_menu from '../Navigation/Nav'


export default class Layout extends Component {
  render() {
    return (
        <>
          <Main_menu/>

          {this.props.children}

        </>
    )
  }
}
