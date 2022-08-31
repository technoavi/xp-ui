import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import attach from "../../assets/attach.svg";
import add_file from "../../assets/add_file.svg";
import share from "../../assets/share.svg"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./../College.css";
import AddAttachmentModal from './AddAttachmentModal'
export default class AttachmentsTab extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      people: [
        {
          id: 1,
          url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
          title: "Reflection Notes   ",
          date: "21/02/2020",
        },
        {
          id: 2,
          url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
          title: "Revision Notes",
          date: "21/02/2020",
        }
      ]
    }
  }

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen,
  });
};
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
                <a  href={url} download style={{ textDecoration: "none" }}>
                <Image
                href={url} 
                    src={attach}
                    alt="pause"
                    style={{ width: 33, height: 33, margin: "6px 0 0 38px" }}
                  />
         <span id="blue-font">{title}</span></a>
                </div>
              </div>
            </td>
            <td style={{ verticalAlign: "middle", width: "806px" }}>
              <div style={{ width: "606px", marginLeft: "12px" }}>
<div>
           {/* <a  href={url} download><span id="blue-font">{title}</span></a> */}
   </div>  
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
                <span id="stu-name">{date}</span>
              </div>
            </td>
            
            <td>
            <Image width={30} height={30} src={share} alt="Card image cap" />
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
        <div className="row">
        <div className="col">
        <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Current Time </span>
        </div>
        </div>
     
      </div>
    <div className="row">
    <div className="col">
1
    </div>
    
	 <div className="col-3">
   <Image
                    src={add_file}
                    onClick={this.toggleModal}
                    alt="add attachments"
                    style={{ width: 33, height: 33, margin: "0 0 0 15px",display: 'block',cursor: 'pointer' }}
                  />
                  <span id="all-o" style={{
                    width: '100%',
    textAlign: 'left',
    bottom: '0',
    left: 0,
    display: 'block',
                  }}>Add Files</span>
                  <AddAttachmentModal show={this.state.isOpen} onClose={this.toggleModal}></AddAttachmentModal>
    </div>
    </div>
    <hr/>
    <table id="students" style={{ textAlign: "left", marginTop: '10px' }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
</div>
	
	  );
  }
}


	
