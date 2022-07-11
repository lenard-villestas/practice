import React, { Component } from 'react'
import GetPics from './GetPics'

class Table extends Component {
  render() {
    return (
      <div>
        <h1>List of Albums</h1>
      
      <table>
        
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Thumbnail</th>
          <th>Delete</th>
        </thead>
        <GetPics/>
      </table>

      </div>
    )
  }
}

export default Table