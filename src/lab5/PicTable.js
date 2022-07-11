import React, { Component } from 'react'
import GetPics from './GetPics'

class Table extends Component {
  render() {
    return (
      <div>
        <h1>List of Albums</h1>
      
      <table>
        
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Thumbnail</th>
          <th>Delete</th>
        </tr>
        <GetPics/>
      </table>
      
      </div>
    )
  }
}

export default Table