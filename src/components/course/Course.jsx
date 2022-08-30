import "./course.css";
import "./ResponsiveBlog.css";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { PostCourse } from "./postcourse/PostCourse";
import React, { Component, useState } from "react";
import BlogPic1 from "../../assets/blog_image_1.svg";
import BlogPic2 from "../../assets/bloco_image_2.svg";
import BlogPic3 from "../../assets/bloco_image_3.svg";
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
        
        <div className="topInfo" style={{marginTop:"5em"}}>
        <div style={{display: "flex",
    justifyContent: "right",
    marginTop: "6px"}}>
      {/* <button onClick={this.signOut} href="#" style={{width:" 70px", height:"30px"}}>
              Sign Out
            </button> */}
            </div>
          <h2>Welcome to Qurio Class</h2>
          <h3>Where teaching and learning come together</h3>
          <p>
          Qurio Class is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.
          </p>
        </div>

        <div className="postsWrapper">
            <div className="postBtn">
            <button className="left">←</button>
            </div>
            <Link to="/md" style={{ textDecoration: 'none'}} className="green-color">  
          <PostCourse
            src={BlogPic1}
            alt="alimento1"
            title="Pre Class"
            profile={ProfilePic}
            name="fabio"
            author="KuldeepSinh Chavda"
          />
</Link>
          <PostCourse
            src={BlogPic2}
            alt="alimento2"
            title="During Class"
            profile={ProfilePic}
            name="Rapha Gama"
            author="KuldeepSinh Chavda"
          />
<Link to="/af" style={{ color: 'red'}} >
          <PostCourse
            src={BlogPic3}
            alt="alimento3"
            title="After Class"
            profile={ProfilePic}
            name="MM"
            author="KuldeepSinh Chavda"
          />
</Link>
          
          <div className="postBtn">
            <button className="rigth">→</button>
            </div>
        </div>
      </div>
    </section>
  );
};
}
