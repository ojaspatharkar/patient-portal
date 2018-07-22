import React, { Component } from 'react';
import './App.css';

class AppoinmentDetails extends Component {
  state = {
    showDetail : false
  }

  componentDidMount(){
  }

  onClose(){
    if(this.props.onClose)
      this.props.onClose();
  }

  render(){

    return(
      <div style={{height : "100%", width : "100%", position : "absolute", top : "0px"}}>
        <div className="tooltip" style={{height : '400px', width : '450px', top : "30%", left : "30%"}}>
          <div style={{float : 'right'}}>
              <img src="/images/close.png" onClick={()=>this.onClose()} className="close" height ="30px" width ="30px" alt="logo" />
          </div>
          <div style={{overflow : "auto", width : '100%'}}>
              <table style={{padding : "10px", textAlign : 'left', lineHeight : '30px', width : '100%'}}>
                <caption><h2 style={{margin : "15px"}}>Appoinment Details</h2></caption>
                <tbody>
                  <tr>
                    <td style={{width : "150px"}}>Doctor Name :</td>
                    <td>{this.props.detail.physician_profile.name}</td>
                  </tr>
                  <tr>
                    <td>Appoinment Id :</td>
                    <td>{this.props.detail.id}</td>
                  </tr>
                  <tr>
                    <td>Start Time :</td>
                    <td>{this.props.detail.start}</td>
                  </tr>
                  <tr>
                    <td>End Time :</td>
                    <td>{this.props.detail.end}</td>
                  </tr>
                  <tr>
                    <td>Created  At :</td>
                    <td>{this.props.detail.created_at}</td>
                  </tr>
                  <tr>
                    <td>Last Updated :</td>
                    <td>{this.props.detail.updated_at}</td>
                  </tr>
                  <tr>
                    <td>Symptoms :</td>
                    <td>{this.props.detail.Symptoms}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    )
  }

}


export default AppoinmentDetails;
