import React, { Component } from 'react'
import Menu from './Menu';

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
    //   Метод setState() призначає зміни об’єкта стану (state). У відповідь на зміни стану компонент рендериться повторно.
        increment(){
        this.setState(state => ({
            count: state.count + 1
        }));
      }
        decrement(){
        this.setState(state => ({
            count: state.count - 1
        }));
      }
        reset(){
        this.setState(state => ({
            count: 0
        }));
      }
    
    
  render() {
    // 2 спосіб доступу до state:
    // const name = this.state.name;
    // якщо коритсуватись цим способом то в фігурні дужки просто передається імʼя змінної (Class component {name})
        return (
            <div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
            </div>
          );
  }
}
