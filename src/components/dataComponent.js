import React, { Component } from 'react'
import elephant from '../images/elephant.jpeg'
import App from '../App'
const data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
export class DataComponent extends Component {
    
  render() {
    return (
     <App images={data}/>
    )
  }
}

export default DataComponent