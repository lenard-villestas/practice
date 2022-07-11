import React, { Component } from 'react'
import axios from 'axios';
import './pictable.css';
class GetPics extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []

      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    deleteRow = (event) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${event.target.value}`);
    }
  render() {
    let {posts} = this.state;
    let rows = posts.map(post => 
        <tr>
         <td>{post.id}</td>
         <td>{post.title}</td>
         <td><img src={post.thumbnailUrl}></img></td>
         <td><button onClick={this.deleteRow} value={post.id}>Delete</button></td>
        </tr> );

    return (
        rows
    )
  }
}

export default GetPics