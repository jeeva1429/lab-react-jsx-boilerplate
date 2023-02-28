import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const data = this.props.images;
    return (
      <div className='main-div'>
        {data.map(ele => (
          <img key={ele.id} src={ele.img} />
        ))}
      </div>
    );
  }
}

export default App;
