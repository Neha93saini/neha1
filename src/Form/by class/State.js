import React, { Component } from 'react'
import State1 from './State1'

export default class State extends Component {
    constructor(){
        super()
        this.state= {
            name: " neha"
        }
    }

    statechaneges(){
        this.setState({
            name : "Rahul"
        })
    }
  render() {
    return (
      <div>
            {this.state.name}
            <button onClick={()=>this.statechaneges()}> click me</button>
            <State1 name={this.state.name}/>
      </div>
    )
  }
}
