import React, { Component } from 'react'
import loading from "./spinner.gif"
// export default class Spinner extends Component {
  // render() {
    export default function Spinner (){
    return (
      <div>
        <img src={loading} alt="" style={{height:50,width:50}} />
      </div>
    )
  }

