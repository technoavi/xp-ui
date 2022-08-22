import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import "./../College.css";
import Image from "react-bootstrap/Image";
import Module from "../../assets/modules.svg";
import Session from "../../assets/session.svg";
import Hours from "../../assets/hours.svg";
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
  render() {
    const courseData = {
      modules: 4,
      session: 41,
      hours: 67,
      course: "Data Science Engineering",
      faculty: "Avinash Srivastava",
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
            <span style={{ fontFamily: "Poppins", fontSize: "32px" }}>
              {courseData.course}
            </span>
            <br />

            <span style={{ fontFamily: "Poppins", fontSize: "20px" }}>
              {courseData.faculty}
            </span>
            <br />
            <div style={{ display: "flex", marginTop: "12px" }}>
              <div style={{ marginRight: "12px" }}>
                <Image
                  src={Module}
                  alt="Module"
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.modules}</span>&nbsp;
                <span id="crs-card-btm">Modules</span>
              </div>
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
                  alt="Hours"
                  style={{ height: "16px", width: "16px", padding: "2PX" }}
                />
                &nbsp;
                <span id="crs-card-btm">{courseData.hours}</span>&nbsp;
                <span id="crs-card-btm">Hours</span>
              </div>
            </div>
            {/* end */}
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
              <Tab component={CustomTab} label="Syllabus" id="stusyllabus" />
              <Tab component={CustomTab} label="Session" id="stusession" />
              <Tab component={CustomTab} label="Hotspot" id="stuhotspot" />
              <Tab
                component={CustomTab}
                label="Assesments"
                id="stuassessment"
              />
              <Tab
                component={CustomTab}
                label="Attachments"
                id="stuattachment"
              />
              <Tab
                component={CustomTab}
                label="Announcement"
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
