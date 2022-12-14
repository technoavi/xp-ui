import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import Avatar from "@material-ui/core/Avatar";
import pic from "../../assets/profile.jpg";
import ai from "../../assets/courses.jpg";
import play from "../../assets/play.svg";

export default class StuHotspotTab extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      hostspotvideos: [
        {
          Session1: [
            {
              Hostpot1: [
                {
                  id: 1,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
                {
                  id: 2,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
              ],
              Hostpot2: [
                {
                  id: 1,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
                {
                  id: 2,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
              ],
            },
          ],
        },
        {
          Session2: [
            {
              Hostpot1: [
                {
                  id: 1,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
                {
                  id: 2,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
              ],
              Hostpot2: [
                {
                  id: 1,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
                {
                  id: 2,
                  url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
                  title: "500 mg",
                  runtime: "5.0",
                  duration: 4,
                },
              ],
            },
          ],
        },
      ],
    };
  }

  renderTableData() {
    return this.state.hostspotvideos.map((student, index) => {
      const {
        id,
        url,
        title,
        runtime,
        duration,
      } = student; 
      return (
        <div>
          <tr key={id}>
            <td>
              <div id="sess-vid-div">
                <div id="wrapper">
                  <Image
                    src={url}
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
                <span id="mod-title">Module 1</span>
                <br />
                <span id="stu-name">{runtime}</span>
                <br />
                <span id="cc-lbl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
                <span id="stu-name">{duration}</span>
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
          <div className="col-sm-3">
            <div style={{ margin: "15px", width: "180px" }}>
              <Image width={438} height={105} src={ai} alt="Card image cap" />
              <br />
              <span id="dash-lbl">By Mr Avinash Srivastava Srivastava</span>
            </div>
          </div>
          <div
            className="col-sm-9"
            style={{
              textAlign: "left",
              marginLeft: "12px",
              width: "100%",
            }}
          >
            <div>
              <span id="mod-title">Module 1</span>
              <br />
              <div>
                {" "}
                <span id="stu-name">
                  Finance methods of 2020 and it Priciples to solve crisis.
                </span>
                <br />
                <span id="cc-lbl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </span>
                <br />
                <p id="dash-lbl" style={{ marginTop: "18px" }}>
                  {" "}
                  <u>3 Sessions</u>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div
                    id="add-ses"
                    style={{ float: "right", textAlign: "center" }}
                  >
                    <span id="all-o">Add new Session</span>
                  </div>
                </p>
              </div>
            </div>
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
