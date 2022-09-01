import React, { Component, useState } from "react";

import Image from "react-bootstrap/Image";
import "./../College.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import add_syllab from "../../assets/add_syllabus.svg";
import attach from "../../assets/attachmnt.svg";
import AddSyllabusModal from "./AddSyllabusModal";
import Mycalendar from "../calendar/Mycalendar";
import moment from "moment";
export default class SyllabusTab extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let dt = moment();

    return (
      <div style={{ textAlign: "left", marginTop: "12px" }}>
      <div className="row">
        <div className="onetag" >
        <span >All your scheduled classes are displayed here </span>
        </div>
       
      

          {/* <AddSyllabusModal show={this.state.isOpen} onClose={this.toggleModal}></AddSyllabusModal> */}
        
      </div>

   
      <div className="row">
     <Mycalendar/>
      </div>
    </div>
   
        
    );
  }
}
