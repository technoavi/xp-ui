import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../assets/profile.jpg";
import ai from "../../assets/courses.jpg";
import play from "../../assets/play.svg";
import VideoInput from "../videoUpload/VideoInput";
import share from "../../assets/share.svg"
import SelelctCal from "../calendar/SelelctCal";
import DatePicker from "react-datepicker";
import { useSnackbar } from "../util/MessageBar";
import "react-datepicker/dist/react-datepicker.css";
import MessageBar from "../util/MessageBar";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import AlertMassage from "../AlertMessage";
export default class HotspotTab extends Component {
  

  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      open:false,
      startDate: new Date(),
              hostspotvideos: [
                {
                  id: 1,
                  name: "Animal Defence Mechanism",
                  img_url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  email_id: "dfgg@email.com",
                  department: "Understand the science behind defence mechanism of animals",
                  course_enrolled: "23.09",
                },
                {
                  id: 2,
                  name: "Buoyancy ",
                  img_url: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
                  email_id: "dfgg@email.com",
                  department: "See how buoyancy keeps a boat afloat",
                  course_enrolled: "15.67",
                },
                {
                  id: 3,
                  name: "Angular Momentum",
                  img_url: "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
                  email_id: "dfgg@email.com",
                  department: "Thinking of flip? See this first",
                  course_enrolled: "12.34",
                },
                {
                  id: 4,
                  name: "Velocity and Friction",
                  img_url: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
                  email_id: "dfgg@email.com",
                  department: "Ever fallen while skating? know why ",
                  course_enrolled: "5.00",
                }
              ],
             
         
        
    };
  }
  onChange= () => {
    this.setState({
      startDate: this.state.startDate
    });
  };
   handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
 
    this.setState({
      open: !this.state.open
    });
  };
  
   handleClickEvent = () => {
    this.setState({
      open: !this.state.open
    });
  };
  renderTableData() {
    return this.state.hostspotvideos.map((student, index) => {
      const {
        id,
        img_url,
        name,
        department,
        course_enrolled,
      } = student; 
      return (
   
          <tr key={id}>
                 <div>
            <td>
              <div id="sess-vid-div">
                <div id="wrapper">
                  <Image
                    src={img_url}
                    alt="mqmin"
                    style={{ width: 120, height: 90, opacity: 0.53 }}
                  />
                  <Image
                    src={play}
                    alt="pause"
                    style={{ width: 33, height: 33, margin: "26px 0 0 38px" }}
                    id="img2"
                  />
                </div>
              </div>
            </td>
            <td style={{ verticalAlign: "top", width: "806px" }}>
              <div style={{ width: "606px", marginLeft: "12px" }}>
                <span id="mod-title">Class X</span>
                <br />
                <span id="stu-name">{name}</span>
                <br />
                <span id="cc-lbl">
                {department}
                </span>
                <div id="stu-div" style={{ width: "130px" }}>
                {" "}
                <span id="stu-name">{course_enrolled}</span>
                
              </div>
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "130px" }}>
            
                <div style={{textAlign: "right", width:"50px"}}> 
                <div style={{textAlign: "right", width:"50px", marginLeft:"-150px"}}><span>Watch Before </span></div>
                
                <div style={{textAlign: "left", width:"50px", marginLeft:"-80px", marginTop:"-40px"}}><SelelctCal className="input"/></div>
             
                <Image width={30} height={30} src={share} alt="Card image cap" onClick={this.handleClickEvent} />
               {/*     <AlertMassage message={"hello"}  />
             <MessageBar handleToClose={this.handleToClose} 	open={this.state.open}/> */}
           <Snackbar
		anchorOrigin={{
		horizontal: "right",
		vertical: "top",
		}}
		open={this.state.open}
		autoHideDuration={5000}
		message="Video Shared"
		onClose={this.handleToClose}
		action={
		<React.Fragment>
			<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={this.handleToClose}
			>
			<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment> 	}	/> 
           
              
                </div>
              </div>
            </td>
        
          <hr style={{ marginBottom: " 0.7rem", marginTop: "0.5rem" }} />
        </div>
        </tr>
      );
    });
  }

  render() {
    
    return (
      <div className="row" id="ses-div">
          <div className="row">
        <div className="col">
        <div className="onetag" >
        <span >Share a video with your students and let them come prepared to the class</span>
        </div>
        </div>
     
      </div>
        <div className="row" >
          <div className="col-sm-3">
           
          </div>
          <div
            className="col-sm-9"
            style={{
              marginLeft: "25px",
              textAlign: "left",
          
              width: "100%"
            }}
          >
            
            <VideoInput width={100} height={250} />
            
          </div>
          <hr
            style={{ marginBottom: "1rem", marginTop: "0.5rem", width: "95%" }}
          />
        </div>

        <table id="students" style={{ textAlign: "left" }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
