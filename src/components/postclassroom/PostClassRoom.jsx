import "./course.css";
import "./ResponsiveBlog.css";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import  {PostClass}  from "./postclass/PostClass";
import React, { Component, useState } from "react";
import BlogPic1 from "../../assets/class9.png";
import BlogPic2 from "../../assets/class10.png";
import BlogPic3 from "../../assets/class11.png";
import BlogPic4 from "../../assets/class12.png";
import logo from "../../assets/logo.png";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import ProfilePic from "../../assets/profile.jpg";

export default class PostClassRoom extends Component {

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
                <h2> Notes</h2>
              </div>
             
              <div style={{display: "flex",marginTop:"1em",
    justifyContent: "center"}}>
                <h3>
                Summarize a lesson and consolidate key information to share it with the class</h3>

              </div>
            </div>





          </div>

          <div className="postsWrapper"style={{display: "flex",marginTop:"1em",
    justifyContent: "center"}}>

           
              <PostClass
                src={BlogPic1}
                alt="alimento1"
                title="Class IX"


              />
        

            <PostClass
              src={BlogPic2}
              alt="alimento2"
              title="Class X"


            />
           
              <PostClass
                src={BlogPic3}
                alt="alimento3"
                title="Class XI"

              />
    
            <PostClass
                src={BlogPic4}
                alt="alimento3"
                title="Class XII"

              />

          </div>
        </div>
      </section>
    );
  };
}
