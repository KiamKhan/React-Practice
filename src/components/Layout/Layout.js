import React, { Component } from 'react'
import MainMenu from '../Navigation/Nav'


export default class Layout extends Component {
  render() {
    return (
        <>
          <MainMenu/>

          {this.props.children}

        </>
    )
  }
}