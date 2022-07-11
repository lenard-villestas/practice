import React, { Component } from 'react'

class AddForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         title: ''
      }
    }
    submitHandler = (e) => {

    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>

        </form>
      </div>
    )
  }
}

export default AddForm