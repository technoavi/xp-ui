import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardBody, Button } from "reactstrap";
import ai from "../../assets/ai.jpg";
import pin from "../../assets/pin.png";
import Image from "react-bootstrap/Image";
import play from "../../assets/playbtn.svg";
import session_thumb from "../../assets/session_thumb.png";
import Typography from "@material-ui/core/Typography";

export default class StuSessionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      id,
      img_url,
      ses_num,
      title,
      faculty,
      description,
    } = this.props.person;
    return (
      <div
        style={{
          width: "300px",
          height: "205px",
          
         margin: "18px"
        }}
      >
        <Card style={{ width: "300px", height: "215px" }}>
          <div>
            <Image
              src={session_thumb}
              alt="seesion image"
              style={{ width: 300, height: 150 }}
            />
            <div id="text-over" style={{ left: "12px" }}>
              <div style={{ marginLeft: "12px" }}>
                <Image
                  src={play}
                  alt="pause"
                  style={{ width: 33, height: 33, margin: "90px 0px 0px 0px" }}
                  id="img2"
                />
                <span
                  style={{
                    color: "white",
                    float: "right",
                    top: "-18px",
                    right: "-20px",
                    position: "absolute",
                  }}
                  id="cc-label"
                >
              
                  Session&nbsp;{ses_num}&nbsp;
                </span>
                <div style={{ marginTop: "88px", marginLeft: "12px" }}>
                  <label
                    id="stu-name"
                    style={{
                      color: "white",
                      width: "235px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {title}
                  </label>

                  <span
                    style={{ color: "white", display: "flex" ,     width: "235px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",}}
                    id="elevenpointfive-font"
                  >
                    By :&nbsp;{faculty}
                  </span>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <span
              style={{
                textAlign: "left",
                marginTop: "6px",
                display: "flex",
                marginLeft: "12px",
              }}
              id="trunc-txt"
            >
              {description}
            </span>
          </div>
        </Card>
      </div>
    );
  }
}
