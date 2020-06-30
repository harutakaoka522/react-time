import React from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function App() {
  let items = [
    {"name": "イチゴ", "price":"100"},
    {"name": "メロン", "price":"150"},
    {"name": "ばなな", "price":"200"},
  ]

  return (
    <div className="App container">
      <table className="table table-striped">
        <tbody>
        <Clock />
        </tbody>
        </table>

    </div>
  )
}


class Clock extends React.Component {
  constructor(props){
    super(props);
    this.now = new Date();
    this.state = {
      time: `${this.now.getHours()} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`
    }

    this.refresh = this.refresh.bind(this);

  }


  refresh(){
    this.now = new Date();
    this.setState((state) => ({
      time: `${this.now.getHours()} : ${this.now.getMinutes()} : ${this.now.getSeconds()}`
  }));
  }

  render() {
    return <p onClick={this.refresh}>{this.state.time}</p>
  }
}

export default App;
