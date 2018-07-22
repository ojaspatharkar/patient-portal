import React, { Component } from 'react';
import './App.css';

class Header extends Component {

menuClick(menu){
  if(this.props.menuClick)
    this.props.menuClick(menu)
}

  render() {
    return (
        <header className="App-header">
          <table>
            <tr>
              <td><img src={this.props.profile.profilePicURL} className="App-logo" height ="200px" width ="150px" alt="logo" /></td>
              <td align="center" style={{verticalAlign : 'top', width : '100%', textAlign : "left"}}>
                <table style={{width : "100%", paddingLeft : "20px"}}>
                  <tr>
                    <td align="center" colSpan="2"><h1 style={{margin : "15px"}}>Welcome {this.props.profile.patient_name}</h1></td>
                  </tr>
                  <tr>
                    <td style={{width : "100px"}}>Name :</td>
                    <td>{this.props.profile.patient_name}</td>
                  </tr>
                  <tr>
                    <td >Phone :</td>
                    <td>{this.props.profile.phone}</td>
                  </tr>
                  <tr>
                    <td >Email :</td>
                    <td>{this.props.profile.email}</td>
                  </tr>
                  <tr>
                    <td >Address :</td>
                    <td>{this.props.profile.address}</td>
                  </tr>
                </table>
                <input type="button" value="Menu 1" className="button" onClick={()=>{this.menuClick("menu1")}}/>
                <input type="button" value="Menu 2" className="button" onClick={()=>{this.menuClick("menu2")}}/>
              </td>
            </tr>
          </table>
        </header>
      )
    }
}

export default Header;
