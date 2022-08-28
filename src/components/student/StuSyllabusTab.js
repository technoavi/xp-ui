import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import Session from "../../assets/session.svg";
import attach from "../../assets/attachmnt.svg";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Mycalendar from "../calendar/Mycalendar";
import moment from "moment";

export default class StuSyllabusTab extends Component {
  
  render() {
   
    let dt = moment();
    
    return (
      <div style={{ textAlign: "left", marginTop: "12px" }}>
      <div className="row">
        <div className="col">
          <span id="hd-colg-name">Current Time {dt.format("hh:mm a") }</span>
        </div>
      
        
      </div>

    
      <div className="row">
     
     <Mycalendar/>
      </div>
    </div>
   
        
    );
  }
}
