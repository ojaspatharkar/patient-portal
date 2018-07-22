import React, { Component } from 'react';
import './App.css';
import AppoinmentData from './data.json';
import Header from './Header.js';
import Appoinmtnets from './Appoinments';

class App extends Component {
  state = {
    profile : AppoinmentData.user
  }

  componentDidMount(){

  }

  menuClicked(menu){
    alert(menu + " clicked....");
  }

  render() {

    return (
      <div className="App">
      <Header profile= {this.state.profile} menuClick={(menu)=>{this.menuClicked(menu)}}/>
        <div style={{padding : "20px"}}>
          <Appoinmtnets details={AppoinmentData.appoinments}/>
        </div>
      </div>
    );
  }
}

export default App;
