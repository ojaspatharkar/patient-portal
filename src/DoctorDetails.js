import React, { Component } from 'react';
import './App.css';


class DoctorDetails extends Component {
  state = {
    showDetail : false
  }

  componentDidMount(){
  }


  getTooltip(){
    return(
      <div className="tooltip">
        <table>
          <tr>
            <td><img src={this.props.details.profilePicURL} className="App-logo" height ="200px" width ="150px" alt="logo" /></td>
            <td style={{verticalAlign : 'top', width : '100%'}}>
                <table style={{width : "100%", textAlign : 'left', paddingLeft : "10px"}}>
                  <caption><h2 style={{mergin : "13px"}}>Doctor Profile </h2></caption>
                  <tr>
                    <td style={{width : '100px'}}>Name : </td>
                    <td>{this.props.details.name}</td>
                  </tr>
                  <tr>
                    <td>ID : </td>
                    <td>{this.props.details.id}</td>
                  </tr>
                  <tr>
                    <td >Speciality : </td>
                    <td>{this.props.details.speciality}</td>
                  </tr>
                  <tr>
                    <td >Edication : </td>
                    <td>{this.props.details.edication}</td>
                  </tr>
                  <tr>
                    <td >Phone : </td>
                    <td>{this.props.details.phone}</td>
                  </tr>
                </table>
            </td>
          </tr>
        </table>

      </div>
    )
  }


  render() {
    return (
      <div>
          <a href="javascript:void(0)"
            onMouseOver={()=>{this.setState({showDetail : true})}}
            onMouseOut={()=>{this.setState({showDetail : false})}}>
            {this.props.details.name}</a>

            {
              this.state.showDetail
              ?
                this.getTooltip()
              : ""
            }
      </div>

    )
  }
}

export default DoctorDetails;
