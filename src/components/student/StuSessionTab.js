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
import ReactPlayer from "../playercomp/MyReactPlayer";
import vd1 from "../../assets/video/v5.mp4"
import vd2 from "../../assets/video/v5.mp4"
import vd3 from "../../assets/video/v5.mp4"
import vd4 from "../../assets/video/v5.mp4"

export default class StuSessionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      students: [
        {
            id:1,
            ses_num: 1,
            faculty: "Ankit",
            img_url:vd1,
            title: "Animal Defence Mechanism",
            description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
          date:"08/11/2022",
          status: "open"
        }
        ,
        {
          id:2,
          ses_num: 2,
          faculty: "Ankit",
          img_url:vd2,
          title:  "Buoyancy ",
          description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
          date:"05/07/2022",
          status: "closed"
      },
      {
        id:3,
        ses_num: 3,
        faculty: "Ankit",
     img_url:vd3,
        title: "Angular Momentum",
        description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
        date:"21/09/2022",
        status: "open"
    },
    {
      id:4,
      ses_num: 4,
      faculty: "Ankit",
        img_url:vd4,
      title: "Velocity and Friction",
      description: "Module 1Module 1Module 1,Module 1Module 1Module 1Module 1Module 1Module 1Module 1",
      date:"11/11/2022",
      status: "open"
  }
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
        <span >Prepare for your upcoming class by watching a video</span>
        </div>
        <div className="row" style={{   display: "flex",
    flexWrap: "wrap"}}>
          {peopleCards}
        </div>
        {/* <ReactPlayer open={this.state.open} toggleModal={this.onOpenModal} /> */}
      </div>
    );
  }
}
