import React, { Component } from 'react'
import Menu from './Menu';

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vlad',
      }
    }
    
  render() {
    return (
      <div>
                <Menu/>
              <h1>Class component {this.props.number}</h1>
              {/* Tакож можна передавати масив:
              <h1>Class component {this.props.numbers.join(',')}</h1> */}
      </div>
    )
  }
}
