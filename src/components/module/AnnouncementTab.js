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
          faculty: "Kuldeep Chavada",
          title: "Quiz Extended",
          department: "Computer Science",
          date:"6/12/2020",
          description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava"
        
        },
        {
          id: 2,
          faculty: "Jay D Vala ",
          title: "Responsiveness UI Pending",
          department: "Bootstrap UI",
          date:"6/12/2020",
          description: "He has experience of more 20 years in Biotechnology & Micro cell technology."
        
        },
        {
          id: 3,
          faculty: "Martin harrison",
          title: "Logo Pending",
          department: "UX Designing",
          date:"6/12/2020",
          description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava"
        
        },
        {
          id: 4,
          faculty: "Prasad K",
          title: "Cricket club launched",
          department: "Cricket Academy",
          date:"6/12/2020",
          description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava"
        
        },
        {
          id: 5,
          faculty: "Avinash Srivastava",
          title: "Qurio is launching soon",
          department: "AI and Product",
          date:"6/12/2020",
          description: "He has experience of more 20 years in Biotechnology & Micro cell technology. Avinash SrivastavHe has experience of more 20 years in Biotechnology & Micro cell technology.Avinash Srivastava"
        
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
	
