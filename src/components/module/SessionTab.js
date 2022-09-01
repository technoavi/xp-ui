import React, { Component, useState } from "react";

import Image from "react-bootstrap/Image";
import "./../College.css";
import ai from "../../assets/courses.jpg";
import play from "../../assets/play.svg"
import share from "../../assets/share.svg"
import addsess from "../../assets/add_session.svg"
import AlertMassage from "../AlertMessage";

export default class SessionTab extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      clickBtn:"",
      sts:false,
      clickBtn:{
        msg: "",
        key:''

      },
      
      //state is by default an object
      students: [
        {
          id: 1,
          name: "Animal Defence Mechanism",
          img_url: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
          email_id: "dfgg@email.com",
          department: "Understand the science behind defence mechanism of animals",
          course_enrolled: "23.09",
        },
        {
          id: 2,
          name: "Buoyancy ",
          img_url: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg",
          email_id: "dfgg@email.com",
          department: "See how buoyancy keeps a boat afloat",
          course_enrolled: "15.67",
        },
        {
          id: 3,
          name: "Angular Momentum",
          img_url: "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg",
          email_id: "dfgg@email.com",
          department: "Thinking of flip? See this first",
          course_enrolled: "12.34",
        },
        {
          id: 4,
          name: "Velocity and Friction",
          img_url: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg",
          email_id: "dfgg@email.com",
          department: "Ever fallen while skating? know why ",
          course_enrolled: "5.00",
        }
    
      ],
    };
    this.imageClick = this.imageClick.bind(this);
  }
  imageClick = () => {
  //  console.log(this.state.clickBtn.msg+"Published", this.clickBtn.key )
//alert(this.state.sts)
this.setState({
 sts: !this.state.sts,
  clickBtn: {msg: "Published", key: Math.random()}
  
})

  } 
  

  
  
  renderTableData() {
    
    return this.state.students.map((student, index) => {
      const {
        id,
        name,
        img_url,
        email_id,
        department,
        course_enrolled,
      } = student; 
      const msg="Published"
      return (

        <div>
          <tr key={id}>
            <td>
              <div id="sess-vid-div">
              <div id="wrapper">
      <Image src={img_url} alt="mqmin" style={{ width: 120, height: 90, opacity: 0.53 }} />
      <Image src={play} alt="pause" style={{ width: 33, height: 33 , margin: "26px 0 0 38px"}} id="img2"/>
    </div>
              </div>
            </td>
            <td style={{verticalAlign:'top' ,width: "806px" }}>
              <div  style={{ width: "606px" ,marginLeft: '12px'}}>
              <span id="mod-title">Standard IX</span><br/>
                <span id="stu-name">{name}</span>
                <br />
                <span id="cc-lbl">
                 {department}
                </span>
              </div>
            </td>
            
          
            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
                <span id="stu-name">{course_enrolled}</span>
             
                <div style={{marginLeft: "15px"}}>
                <Image width={30} height={30} src={share} alt="Card image cap" onClick={this.imageClick}/>
                
        
                {this.state.sts ? <AlertMassage key={id} message={msg} /> : null}
                </div>
               
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
        <div className="col">
        <div className="onetag" >
        <span >Share a video with your students </span>
        </div>
        </div>
       
      </div>
       
        <div className="row">
        {/*
          <div className="col-3">
            <div style={{ margin: "15px", width: "180px" }}>
              <Image width={438} height={105} src={ai} alt="Card image cap" />
              <br />
              <span id="dash-lbl">By Qurio Class</span>
            </div>
          </div>
          <div
            className="col-8"
            style={{
              textAlign: "left",
              margin: "10px 0px 0px -70px",
              width: "100%",
            }}
          >
            <div style={{textAlign: "left", marginLeft: "85px"}}>
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
                  <u>5 Sessions</u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                </p>
              </div>
              
            </div>
          </div> */}
        <div className="col" style={{ textAlign: 'center' }}>
          
        </div>
        

        </div>
       
        <table id="students" style={{ textAlign: "left" }}>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
