import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import attach from "../../assets/attach.svg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./../College.css";
export default class StuAttachmentsTab extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          url: "https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2019/08/08123637/jesc112.pdf",
          title:"Electricity",
          date: "21/09/2022",
        },
        {
          id: 2,
          url: "https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2019/08/08123630/jesc113.pdf",
          title: "Magnetic Effects Of Electric Current",
          date: "29/02/2022",
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
           <a  href={url} download><span id="blue-font">{title}</span></a>
   </div>  
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
                <span id="stu-name">{date}</span>
              </div>
            </td>
          </tr>
          <hr style={{ marginBottom: " 0rem", marginTop: "0rem" }} />
        </div>
      );
    });
  }
  render() {
    return (
		<div >
       <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Prepare for your upcoming class by going through this document </span>
        </div>
    <table id="students" style={{ textAlign: "left", marginTop: '10px' }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
</div>
	
	  );
  }
}

	
