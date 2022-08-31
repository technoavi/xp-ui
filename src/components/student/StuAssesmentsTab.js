import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "./../College.css";
// import quiz from "../../assets/courses.jpg";
// import assgn from "../../assets/Quiz_grey.svg";
// import qz from "../../assets/bell.svg";
import StuAssessmentCard from "./StuAssessmentCard";

import { Col } from "reactstrap";

export default class StuAssessmentsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      assessments: [
        {
          id: 1,
          title: "Pythagorus Theorem",
          type: "Quiz 1",
          due_date: "21/02/2022",
          status: "0",
          marks: "10",
          description:
            "loerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbloerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbdbgsbgbgbbdsggggggggggggggggggggggggggggggggggggggggggdbgsbgbgbbdsgggggggggggggggggggggggggggggggggggggggggg",
        },
        {
          id: 2,
          title: "Pythagorus Theorem",
          type: "Quiz 2",
          due_date: "21/04/2022",
          status: "1",
          marks: "10",
          description:
            "loerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbloerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbdbgsbgbgbbdsggggggggggggggggggggggggggggggggggggggggggdbgsbgbgbbdsgggggggggggggggggggggggggggggggggggggggggg",
        },
        {
          id: 3,
          title: "Pythagorus Theorem",
          type: "Quiz 3",
          due_date: "21/03/2022",
          status: "1",
          marks: "10",
          description:
            "loerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbloerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbdbgsbgbgbbdsggggggggggggggggggggggggggggggggggggggggggdbgsbgbgbbdsgggggggggggggggggggggggggggggggggggggggggg",
        },
        {
          id: 4,
          title: "Pythagorus Theorem",
          type: "Quiz 4",
          due_date: "24/04/2022",
          status: "0",
          marks: "4",
          description:
            "loerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbloerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbdbgsbgbgbbdsggggggggggggggggggggggggggggggggggggggggggdbgsbgbgbbdsgggggggggggggggggggggggggggggggggggggggggg",
        },
        {
          id: 5,
          title: "Pythagorus Theorem",
          type: "Quiz ",
          due_date: "25/05/2022",
          status: "0",
          marks: "5",
          description:
            "loerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbloerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbdbgsbgbgbbdsggggggggggggggggggggggggggggggggggggggggggdbgsbgbgbbdsgggggggggggggggggggggggggggggggggggggggggg",
        },
        {
          id: 6,
          title: "Pythagorus Theorem",
          type: "Quiz 6",
          due_date: "26/06/2022",
          status: "1",
          marks: "6",
          description:
            "loerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbloerewrrrrrrrrrrrrrxfdsfdscsdvdsbsbdfbdbgsbgbgbbdsggggggggggggggggggggggggggggggggggggggggggdbgsbgbgbbdsgggggggggggggggggggggggggggggggggggggggggg",
        }
      ],
    };
  }

  removePerson(id) {
    this.setState({
      people: this.state.assessments.filter((person) => person.id !== id),
    });
  }
  render() {
    let assessmentsCards = this.state.assessments.map((person) => {
      return (
        <Col md="12" id="cc">
          <StuAssessmentCard
            key={person.id}
            removePerson={this.removePerson.bind(this)}
            person={person}
          />
        </Col>
      );
    });
    return (
      <div>
         <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Current Tab </span>
        </div>
        <div className="row" style={{     display: "flex",
    flexWrap: "wrap"}}>
          {assessmentsCards}
        </div>
      </div>
    );
  }
}
