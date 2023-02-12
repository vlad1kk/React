import React, { Component } from 'react'
import Menu from './Menu';

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility:false,
      }
      // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
      this.handleClick = this.handleClick.bind(this);
    }
    //   Метод setState() призначає зміни об’єкта стану (state). У відповідь на зміни стану компонент рендериться повторно.
    handleClick(){
        this.setState(state => ({
            visibility: !state.visibility
        }));
      }
    
    
  render() {
    // 2 спосіб доступу до state:
    // const name = this.state.name;
    // якщо коритсуватись цим способом то в фігурні дужки просто передається імʼя змінної (Class component {name})
    if(this.state.visibility){
        return (
            <div>
              <h1>Class component {this.state.name}</h1>
              <button onClick={this.handleClick}>Click</button>
                      {/* <Menu/> */}
                    {/* <h1>Class component {this.props.number}</h1> */}
                    {/* Tакож можна передавати масив:
                    <h1>Class component {this.props.numbers.join(',')}</h1> */}
            </div>
          );
    } else {
        return (
            <div>
              <button onClick={this.handleClick}>Click</button>
            </div>
          );
    }
    
  }
}
