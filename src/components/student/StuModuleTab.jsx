import React, { Component, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./../College.css";
import Image from "react-bootstrap/Image";
import Module from "../../assets/modules.svg";
import Session from "../../assets/session.svg";
import Hours from "../../assets/hours.svg";
import logo from "../../assets/banner_logo.png";
import { Tabs, TabList, TabPanel, Tab } from "react-re-super-tabs";
import CustomTab from "./CustomTab";
import StuSyllabusTab from "./StuSyllabusTab";
import StuSessionTab from "./StuSessionTab";
import StuHotspotTab from "./StuHotspotTab";
import StuAssesmentsTab from "./StuAssesmentsTab";
import StuAttachmentsTab from "./StuAttachmentsTab";
import StuAnnouncementTab from "./StuAnnouncementTab";
import banner from "../../assets/banner_course.png";

export default class StuModuleTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("stu");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const courseData = {
      modules: 4,
      session: 41,
      hours: 67,
      course: "Namaste!!",
      faculty: "Rahul",
    };
    return (
      <div>
      
      <div style={{ position: "relative",  textAlign:"left" ,
    height: "100px",

    padding: "75px 0 0 942px",
    backgroundColor: "#13183a",
   
    zIndex: "1"}}>
         <div style={{   marginTop:"-10em", marginLeft:"-12px", textAlign:"right" }}>  <img style={{
                  width: "40%", 
                }} src={logo} alt="logo" /></div>
           
          <div id="text-over">
            <span style={{ fontFamily: "Poppins", fontSize: "20px" }}>
              
            </span>
            <br />

            <span style={{ fontFamily: "Poppins", fontSize: "30px" }}>
            
            </span>
            <br />
           
            
            
            {/* end */}
            <div style={{display: "flex",
    justifyContent: "left",
    marginTop: "30px"}}><button onClick={this.signOut} href="#" style={{width:" 70px", height:"30px"}}>
              Sign Out
            </button></div>
          </div>
          
        </div>
       
        <div
          style={{
            backgroundColor: "white",
            textAlign: "left",
            marginLeft: "125px",
          }}
        >
          <Tabs activeTab="stusession">
            <TabList>
              <Tab component={CustomTab} label="Calendar" id="stusyllabus" />
              <Tab component={CustomTab} label="Pre-watch Content" id="stusession" />
              {/* <Tab component={CustomTab} label="Session" id="stuhotspot" /> */}
              <Tab
                component={CustomTab}
                label="Quiz"
                id="stuassessment"
              />
              <Tab
                component={CustomTab}
                label="Pre-read Content"
                id="stuattachment"
              />
              <Tab
                component={CustomTab}
                label="Notes"
                id="stuannouncement"
              />
            </TabList>
            <TabList>
              <TabPanel component={StuSyllabusTab} id="stusyllabus" />
              <TabPanel component={StuSessionTab} id="stusession" />
              <TabPanel component={StuHotspotTab} id="stuhotspot" />
              <TabPanel component={StuAssesmentsTab} id="stuassessment" />
              <TabPanel component={StuAttachmentsTab} id="stuattachment" />
              <TabPanel component={StuAnnouncementTab} id="stuannouncement" />
            </TabList>
          </Tabs>
        </div>
      </div>
    );
  }
}
