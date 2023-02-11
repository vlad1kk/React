import React from 'react'

export default function Fcomponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  )
}

// Щоб встановити значення props за зумовчуванням, потрібно:
Fcomponent.defaultProps = {name:"Vlad1"}
// а в App.js не вказати значення props(написати тільки <Fcomponent/>) - результат: Hello, Vlad1: