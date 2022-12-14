import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import "./../College.css";
import announcemnt from "../../assets/announcemnt.svg";
import {  Col } from 'reactstrap';
import AnnouncementCard from './AnnouncementCard'
import AddAnnouncementModal from './AddAnnouncementModal'

export default class AnnouncementTab extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false ,
      people: [
        {
        id: 1,
        faculty: "https://www.newcastle.edu.au/__data/assets/pdf_file/0008/333773/LD-Report-Writing-LH.pdf",
         title: "Class X",
         department: "Velocity and Friction",
        date:"6/12/2022",
        description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
        status: "open"
      },
      {
        id: 2,
        faculty: "https://www.newcastle.edu.au/__data/assets/pdf_file/0008/333773/LD-Report-Writing-LH.pdf",
        title: "Class X",
        department: "Buoyancy ",
        date:"6/12/2022",
        description: "He has experience of more 20 years in Biotechnology & Micro cell technology.",
        status: "open"
    
      },
      {
        id: 3,
        faculty: "https://www.newcastle.edu.au/__data/assets/pdf_file/0008/333773/LD-Report-Writing-LH.pdf",
        title: "Class X",
        department: "Angular Momentum",
        date:"6/12/2022",
        description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
        status: "open"
      },
      {
        id: 4,
        faculty: "https://www.newcastle.edu.au/__data/assets/pdf_file/0008/333773/LD-Report-Writing-LH.pdf",
        title: "Class X",
        department:  "Animal Defence Mechanism",
    
        date:"6/12/2022",
        description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava",
        status: "closed"
      }
       
      ]
    }
  }

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen,
  });
};
  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }
  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col md="12" id="cc">
          <AnnouncementCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
  return (
    <div className="card-container">
   
                  <div className="row">
    <div className="col">
    <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Download a report to plan your lecture for an improved student engagement in class</span>
        </div>
    </div>
    <div className="col">
    </div>
	 <div className="col">
   <Image
                    src={announcemnt}
                    onClick={this.toggleModal}
                    alt="announcemnt"
                    style={{ height: "35px", width: "35px", padding: "2PX",
                    marginTop: "2px",  textAlign:'right', marginLeft: '80px' }}
                  />
                  <AddAnnouncementModal show={this.state.isOpen} onClose={this.toggleModal}
                  shouldCloseOnEsc={true}
                  ></AddAnnouncementModal>
      
    </div>
</div>
      
      <div className="row" style={{marginLeft: '42px' ,display:"flex", flexWrap: "wrap"}}>
          {peopleCards}
     
       </div>
    </div>
  );
}
}
	
