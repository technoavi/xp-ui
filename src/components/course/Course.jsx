import "./course.css";
import "./ResponsiveBlog.css";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { PostCourse } from "./postcourse/PostCourse";
import React, { Component, useState } from "react";
import BlogPic1 from "../../assets/preclass.jpeg";
import BlogPic2 from "../../assets/duringclass.jpeg";
import BlogPic3 from "../../assets/postclass.jpeg";
import logo from "../../assets/logo.png";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import ProfilePic from "../../assets/profile.jpg";

export default class Course extends Component {

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

          <div className="topInfo" style={{ marginTop: "22em" }}>

            {/* <button onClick={this.signOut} href="#" style={{width:" 70px", height:"30px"}}>
              Sign Out
            </button> */}
            <div className="row">
              <div className="col" style={{display: "flex",
    justifyContent: "center"}}>
                <h2>Redefine How You Teach!</h2>
              </div>
              <div className="col" style={{
                display: "flex",
                flexWrap: "wrap",
            marginTop:"-5em",
            marginBottom:"-5em"
              }}>
                <div style={{
                  flexGrow: "1",
                  flexBasis: "50%",
                  textAlign: "right",
                  width: "10%",
                  marginTop:"5em"
                }}>
                  <h3>When you plan with </h3>
                </div>

                <div style={{
                   flexBasis: "50%",
                   textAlign:"left", width: "10%",marginTop:"2em", marginLeft:"-20px"
                }}> <img style={{
                  width: "18%"
                }} src={logo} alt="logo" />
                </div>
              </div>
              <div style={{display: "flex",marginTop:"-5em",
    justifyContent: "center"}}>
                <h3>
                  you have better insights, your students are more engaged and their learning is maximized.</h3>

              </div>
            </div>





          </div>

          <div className="postsWrapper"style={{display: "flex",
    justifyContent: "center"}}>

            <a href="/md" style={{ textDecoration: 'none' }} className="green-color">
              <PostCourse
                src={BlogPic1}
                alt="alimento1"
                title="Pre-Classroom"


              />
            </a>
            <a href='/dc'>
            <PostCourse
              src={BlogPic2}
              alt="alimento2"
              title="Classroom"


            />
            </a>
            <a href='/pc'>
              <PostCourse
                src={BlogPic3}
                alt="alimento3"
                title="Post-Classroom"

              />
            </a>


          </div>
        </div>
      </section>
    );
  };
}
