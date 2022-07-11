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
    changeHandler = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }

  render() {
    let{id,title} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <table>
            <tr>
                <td><label htmlFor='id'>ID: </label></td>
                <td><input id='id' type='number' onChange={this.changeHandler} value={id}></input></td>
            </tr>
            <tr>
                <td><label htmlFor='title'>Title: </label></td>
                <td><input id='title' type='text' onChange={this.changeHandler} value={title}></input></td>
            </tr>
            <tr>
               <td colSpan='2'>
               <button type='submit'>Submit</button>
                </td> 
            </tr>
        </table>
        </form>
      </div>
    )
  }
}

export default AddForm