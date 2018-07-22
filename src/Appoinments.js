import React, { Component } from 'react';
import './App.css';
import DoctorDetails from './DoctorDetails';
import AppoinmentDetails from './AppoinmentDetails';


class Appoinmtnets extends Component {
  state = {
    showAppoinmentDetail : false,
    selectedAppoinment : {}
  }

  componentDidMount(){
  }

  openAppoinmentDetail(detail){
    this.setState({selectedAppoinment : detail, showAppoinmentDetail : true})
  }


  render() {

    return (
      <div>
      {
        this.state.showAppoinmentDetail
        ?
          <AppoinmentDetails detail={this.state.selectedAppoinment}
                  onClose={()=>{this.setState({showAppoinmentDetail : false})}}/>
        : null
      }

      <table border="1" style={{lineHeight : "35px"}}>
        <caption><h1>Appoinment Details</h1></caption>
        <tr>
          <th style={{width : "140px"}}>Doctor Name</th>
          <th style={{width : "240px"}}>Start</th>
          <th style={{width : "240px"}}>End</th>
          <th style={{width : "160px"}}>Symptoms</th>
        </tr>
        <tbody>
        {
          this.props.details.map((detail, idx)=>{
            return (<tr style={{cursor : "pointer"}} key={detail.id}
                      onClick={()=>{this.openAppoinmentDetail(detail)}}>
                      <td><DoctorDetails doctorName={detail.physician_name} details={detail.physician_profile}/></td>
                      <td>{detail.start}</td>
                      <td>{detail.end}</td>
                      <td>{detail.Symptoms}</td>
                   </tr>)

          })
        }

        </tbody>
      </table>
      </div>
    )

  }

}

export default Appoinmtnets;
