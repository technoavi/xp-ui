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

export default class HotspotTab extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      
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
        <div>
          <tr key={id}>
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
               
                <div style={{textAlign: "right"}}>
                <Image width={30} height={30} src={share} alt="Card image cap" />
                </div>
              </div>
            </td>
          </tr>
          <hr style={{ marginBottom: " 0.7rem", marginTop: "0.5rem" }} />
        </div>
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
