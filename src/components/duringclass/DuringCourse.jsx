import "./course.css";
import "./ResponsiveBlog.css";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import  {DuringClass}  from "./postcourse/DuringClass";
import React, { Component, useState } from "react";
import BlogPic1 from "../../assets/case.jpeg";
import BlogPic2 from "../../assets/experiment.jpeg";
import BlogPic3 from "../../assets/funfacts.jpeg";
import BlogPic4 from "../../assets/groupact.jpeg";
import logo from "../../assets/logo.png";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import ProfilePic from "../../assets/profile.jpg";

export default class DuringCourse extends Component {

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


    return (
      <section className="blog">

        <div className="blogWrapper">

          <div className="topInfo" style={{ marginTop: "20em" }}>

            {/* <button onClick={this.signOut} href="#" style={{width:" 70px", height:"30px"}}>
              Sign Out
            </button> */}
            <div className="row">
              <div className="col" style={{display: "flex",
    justifyContent: "center"}}>
                <h2> Resource Center</h2>
              </div>
           
              <div style={{display: "flex",marginTop:"1em",
    justifyContent: "center"}}>
                <h3>
                This repository to assist you in the classrom is curated from best of the teachers out there, just like you.</h3>

              </div>
            </div>





          </div>

          <div className="postsWrapper"style={{display: "flex",marginTop:"1em",
    justifyContent: "center"}}>

           
              <DuringClass
                src={BlogPic1}
                alt="alimento1"
                title="Case Studies"


              />
        

            <DuringClass
              src={BlogPic2}
              alt="alimento2"
              title="Experiments"


            />
           
              <DuringClass
                src={BlogPic3}
                alt="alimento3"
                title="Stories/Fun facts"

              />
    
            <DuringClass
                src={BlogPic4}
                alt="alimento3"
                title="Group Activities"

              />

          </div>
        </div>
      </section>
    );
  };
}
