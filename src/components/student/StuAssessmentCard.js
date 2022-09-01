import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardBody, Button } from "reactstrap";
import assign from "../../assets/assignmnt.svg";
import quiz from "../../assets/quiz.svg";
import pin from "../../assets/pin.png";
import submitted from "../../assets/submitted.svg";
import qz from "../../assets/quiz.jpeg";
import Image from "react-bootstrap/Image";

export default class StuAssessmentCard extends Component {
  constructor(props) {
    super(props);
  }

   getFormattedDate(s_date){
        var sptdate = String(s_date).split("/");
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var myDay = sptdate[0];
        var myMonth = sptdate[1];
        var myYear = sptdate[2];
        var combineDatestr = myDay + " " + months[myMonth - 1] + " " + myYear;
    return combineDatestr ;
}
  render() {
    let {
      id,
      type,
      title,
      due_date,
      description,
      status,
      marks,
    } = this.props.person;
    return (
      <div style={{ width: "380px", marginLeft: "8px", marginRight: "8px" }}>
        <Card style={{ width: "380px", height: "180px" }}>
          <div className="row">
            <div className="col-2">
              <Image
                roundedcircle="true"
                alt="Professor"
                src={
                  qz
                }
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "white",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-7">
              <div
                style={{
                  textAlign: "left",
                  marginTop: "15px",
                  marginLeft: "12px",
                  wordBreak: "break-word",
                }}
              >
               
              </div>
            </div>
            <div className="col" style={{padding: '0px'}}>
            { status==='0' ? 
            <div style={{marginTop: '12px',  marginLeft: "12px"}}> 
              <Image src={submitted} alt="submitted" width="16" height="16"/> &nbsp;
              <span id="ninepx-font">SUBMITTED</span></div>
             :  <div style={{marginTop: '12px',  marginLeft: "12px"}} > <span id="ninepx-font">NOT SUBMITTED</span></div>}
            </div>
          </div>
          <CardBody
            style={{
              padding: "10px",
            }}
          >
            <div style={{ textAlign: "right" , marginTop: "-4em"}}>
              <span id="ins-card-lb3">{title}</span>

              <br />
              <div id="trunc-txt">
                <span></span>
                <br />
              </div>
              <br />
              <div style={{ textAlign: "right",marginTop: '-26px' }}>
              <span id="cc-lbl"> Points : </span><span id="#stu-name">
              { status.match(0) ? 
                 <span id="#stu-name">{marks}/10</span> : "--"}
               </span>
               
            </div></div>
          </CardBody>
          <div className="row">
            <div className="col">
              <div>
            
              { status==='0' ? 
            <div style={{}}> 
              <span id="ninepx-font" style={{color:'green', marginLeft:'10px'}}>Open</span></div>
             :  <div style={{}} > <span id="ninepx-font"style={{color:'red', marginLeft:'10px'}}>Closed</span></div>}
             <div style={{textAlign:"right", marginTop:"-15px"}}>
                <span id="cc-lbl">&nbsp;&nbsp;Due Date&nbsp;:&nbsp;</span>
                <span
                  id="cc-lbl"
                  style={{ color: status.match(0) ? "green" : "orange" }}
                >
                  {this.getFormattedDate(due_date)}&nbsp;
                </span>
                </div>
              </div>
            </div>
            <div className="col" style={{
              justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
            }}>
              <div
                id="div-overlay"
                style={{

               color: status.match(0) ? "green" : "orange" ,
                  marginBottom: "15px",
                  marginRight: "10px",
                }}
              >
                <div id="elevn-white" style={{textAlign: 'center'}} >
               { status.match(1) ? 
                  "TAKE TEST" : "TEST TAKEN"}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
