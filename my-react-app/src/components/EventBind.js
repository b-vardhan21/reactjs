import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: 'hello'

        }
        
    }

    Message = () => {
        this.setState({
            message: 'Good Bye'
        })

    }


  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.Message}>Click</button>
      </div>
    )
  }
}
