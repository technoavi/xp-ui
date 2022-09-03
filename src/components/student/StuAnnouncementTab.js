import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import attach from "../../assets/attach.svg";
import announcemnt from "../../assets/announcemnt.svg";
import {  Col } from 'reactstrap';
import AnnouncementCard from './AnnouncementCard'

export default class StuAnnouncementsTab extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          url:"https://drive.google.com/file/d/1cHHCl3LNU1pIb6bnXy7T2K1esfgYgsmj/view",
          title:"PERIODIC CLASSIFICATION OF LEMENTS Lecture 1/2",
          date: "21/09/2022",
        },
        {
          id: 2,
          url: "https://drive.google.com/file/d/1cHHCl3LNU1pIb6bnXy7T2K1esfgYgsmj/view",
          title:"PERIODIC CLASSIFICATION OF LEMENTS Lecture 2/2",
          date: "29/09/2022",
        },
        {
          id: 3,
          url:"https://drive.google.com/file/d/1cHHCl3LNU1pIb6bnXy7T2K1esfgYgsmj/view",
          title:"Velocity",
          date: "21/09/2022",
        },
        {
          id: 4,
          url: "https://drive.google.com/file/d/1cHHCl3LNU1pIb6bnXy7T2K1esfgYgsmj/view",
          title: "Friction",
          date: "29/09/2022",
        }
      ]
    }
  }
  renderTableData() {
    return this.state.people.map((student, index) => {
      const {
        id,
        url,
        title,
        date,
        
      } = student; 
      return (
        <div>
          <tr key={id}>
            <td>
              <div id="sess-vid-div">
                <div >
                <Image
                    src={attach}
                    alt="pause"
                    style={{ width: 33, height: 33, margin: "6px 0 0 38px" }}
                  />
                 
                </div>
              </div>
            </td>
            <td style={{ verticalAlign: "middle", width: "806px" }}>
              <div style={{ width: "606px", marginLeft: "12px" }}>
<div>
           <a  href={url}   target="_blank" download><span id="blue-font">{title}</span></a>
   </div>  
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
                {/* <span id="stu-name">{date}</span> */}
              </div>
            </td>
          </tr>
          <hr style={{ marginBottom: " 0rem", marginTop: "5px" }} />
        </div>
      );
    });
  }
  render() {
    return (
		<div >
       <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Find a summarized lesson and key information from your instructor </span>
        </div>
    <table id="students" style={{ textAlign: "left", marginTop: '10px' }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
</div>
	
	  );
  }
}
	
