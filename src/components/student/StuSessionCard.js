import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardBody, Button } from "reactstrap";
import ai from "../../assets/ai.jpg";
import pin from "../../assets/pin.png";
import Image from "react-bootstrap/Image";
import play from "../../assets/playbtn.svg";
import session_thumb from "../../assets/courseplay.jpeg";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "../playercomp/MyReactPlayer";
export default class StuSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    }
  }
  onOpenModal = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    let {
      id,
      img_url,
      status,
      ses_num,
      title,
      faculty,
      date,
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
        <Card style={{ width: "300px", height: "215px" }}  onClick={this.onOpenModal} >
          <div>
            <Image
              src={session_thumb}
              alt="seesion image"
              style={{ width: 300, height: 150 }}
             
            />
            <div onClick={this.onOpenModal} className="row" style={{   display: "flex",
    flexWrap: "wrap"}}></div>

            <div id="text-over" style={{ left: "12px" }}>
              <div style={{ marginLeft: "12px" }}>
                <Image
                  src={play}
                  alt="pause"
                  style={{ width: 33, height: 33, margin: "90px 0px 0px 0px" }}
                  id="img2"
                  onClick={this.onOpenModal} 
                />
                
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
              {/* {description} */}
            </span>
            <span
              style={{
                textAlign: "left",
                marginTop: "6px",
                display: "flex",
                marginLeft: "12px",
              }}
              id="stu-name"
            >
              Due Date : {date}
            </span>
          <div style={{
            marginLeft: "12px",
            color: "green",
            fontWeight: "400"
          }}>
           {status.match(/open/i) ? "" : <span>Watched </span> }
           </div>
          </div>
        </Card>
        <div onClick={this.onOpenModal} className="row" style={{   display: "flex",
    flexWrap: "wrap"}}></div>
     <ReactPlayer open={this.state.open} toggleModal={this.onOpenModal} url={img_url} />
      </div>
    );
  }
}
