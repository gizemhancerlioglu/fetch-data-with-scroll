import React, { Component } from 'react'
import BoxComponent from './BoxComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <BoxComponent />
        <BoxComponent />
        <BoxComponent />

      </div>
    )
  }
}