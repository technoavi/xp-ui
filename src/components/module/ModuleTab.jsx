import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import "./../College.css";
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTab from './CustomTab'
import SyllabusTab from './SyllabusTab'
import SessionTab from './SessionTab'
import HotspotTab from './HotspotTab'
import AssesmentsTab from './AssesmentsTab'
import AttachmentsTab from './AttachmentsTab'
import AnnouncementTab from './AnnouncementTab'
import banner from "../../assets/banner_course.png";
import Module from "../../assets/modules.svg";
import Session from "../../assets/session.svg";
import Hours from "../../assets/hours.svg";
import { Redirect, Link } from "react-router-dom";

export default class ModuleTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("teach");
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
      session: 5,
      hours: 1.2,
      course: "Science",
      faculty: "Ankit",
    };
    return (
 <div>
 <div style={{ position: "relative", textAlign: "left" }}>
          <Image
            src={banner}
            alt="banner"
            height={160}
            style={{
              width: "100%",
              zIndex: "1",
              backgroundImage: "linear-gradient(to bottom, #626262, #001144)",
            }}
          />
          <div id="text-over">
            <span style={{ fontFamily: "monospace", fontSize: "32px" }}>
              {courseData.course}
            </span>
            <br />

            <span style={{ fontFamily: "monospace", fontSize: "20px" }}>
              {courseData.faculty}
            </span>
            <br />
            <div style={{ display: "flex", marginTop: "12px" }}>
              {/* <div style={{ marginRight: "12px" }}>
                <Image
                  src={Module}
                  alt="Module"
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.modules}</span>&nbsp;
                <span id="crs-card-btm">Grades</span>
              </div> */}
              <div style={{ marginRight: "12px" }}>
                <Image
                  src={Session}
                  alt="Session"
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.session}</span>&nbsp;
                <span id="crs-card-btm">Session</span>
              </div>
              <div style={{ marginRight: "12px" }}>
                <Image
                  src={Hours}
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.hours}</span>&nbsp;
                <span id="crs-card-btm">Hours</span>
              </div>
            </div>
            {/* end */}
            <div style={{display: "flex",
    justifyContent: "left",
    marginTop: "6px"}}><button onClick={this.signOut} href="#" style={{width:" 70px", height:"30px"}}>
              Sign Out
            </button></div>
          </div>
        </div>
     <div style={{backgroundColor: 'white',textAlign: 'left', marginLeft: '125px'}}>
    <Tabs activeTab='session'>
      <TabList>
      <Tab component={CustomTab} label='Calendar ' id='syllabus' />
        <Tab component={CustomTab} label='PreWatch Content' id='session' />
        <Tab component={CustomTab} label='Add Video' id='hotspot' />
        <Tab component={CustomTab} label='Quiz' id='assessment' />
        <Tab component={CustomTab} label='PreRead' id='attachment' />
        <Tab component={CustomTab} label='Reports' id='announcement' />

      </TabList>
      <TabList>
      <TabPanel component={SyllabusTab} id='syllabus' />
        <TabPanel component={SessionTab} id='session' />
        <TabPanel component={HotspotTab} id='hotspot' />
        <TabPanel component={AssesmentsTab} id='assessment' />
        <TabPanel component={AttachmentsTab} id='attachment' />
        <TabPanel component={AnnouncementTab} id='announcement' />
      </TabList>
    </Tabs>
    </div>
  </div>
	  );
  }
}