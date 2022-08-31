import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
import { Col } from "reactstrap";

import Avatar from "@material-ui/core/Avatar";
import pic from "../../assets/profile.jpg";
import ai from "../../assets/courses.jpg";
import play from "../../assets/lock.png";
import StuSessionCard from "./StuSessionCard";
import ReactPlayer from "../playercomp/ReactPlayer";

export default class StuSessionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      students: [
        {
            id:1,
            ses_num: 1,
            faculty: "Avinash Srivastava",
            img_url:
              "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
            title: "Data Science Engineering",
            description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
          
        }
        ,
        {
          id:2,
          ses_num: 2,
          faculty: "Kuldeep Chavda",
          img_url:
            "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
          title: "MAsters of Business Management",
          description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
        
      },
      {
        id:3,
        ses_num: 3,
        faculty: "Jay D Vala",
        img_url:
          "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
        title: "Data Analylist",
        description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
      
    },
    {
      id:4,
      ses_num: 4,
      faculty: "Avinash Srivastava",
      img_url:
        "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
      title: "Finance Principles",
      description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
    
  },
  {
    id:5,
    ses_num: 5,
    faculty: "Avinash Srivastava",
    img_url:
      "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
    title: "Finance Principles",
    description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
  
},
{
  id:6,
  ses_num: 6,
  faculty: "Avinash Srivastava",
  img_url:
    "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
  title: "Finance Principles & Data Analylist",
  description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",

},
{
  id:7,
  ses_num: 7,
  faculty: "Avinash Srivastava",
  img_url:
    "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg",
  title: "Finance Principles",
  description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",

},
      ],
    };
   
  }
  onOpenModal = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  removePerson(id) {
    this.setState({
      people: this.state.students.filter((person) => person.id !== id),
    });
  }
  render() {
    let peopleCards = this.state.students.map((person) => {
      return (
        <Col md="12" id="cc" >
          <StuSessionCard
            key={person.id}
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <div className="card-container">
          <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Current Tab </span>
        </div>
        <div onClick={this.onOpenModal} className="row" style={{   display: "flex",
    flexWrap: "wrap"}}>
          {peopleCards}
        </div>
        <ReactPlayer open={this.state.open} toggleModal={this.onOpenModal} />
      </div>
    );
  }
}
