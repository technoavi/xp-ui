import assgn from "../../assets/quiz.jpeg";
import qz from "../../assets/quiz.jpeg";
import React, { Component, useState } from "react";
import Image from "react-bootstrap/Image";
import "./../College.css";
import share from "../../assets/share.svg"

import SelelctCal from "../calendar/SelelctCal";
import DatePicker from "react-datepicker";
import add_assgn from "../../assets/add_assignmnt.svg";
import add_qz from "../../assets/add_quiz.svg";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import AddAssignmentModal from './AddAssignmentModal'


export default class AssessmentsTab extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
 isOpen: false,
 open:false,
      show: true,
      //state is by default an object
      students: [
        {
          id: 1,
          title: "Animal Defence Mechanism",
          type: "Quiz 1",
          due_date: "21/09/2022",
          status: "open",
          marks: "10",
        },
        {
          id: 2,
          title: "Buoyancy ",
          type: "Quiz 1",
          due_date: "23/09/2022",
          status: "open",
          marks: "10",
        },
        {
          id: 3,
          title: "Angular Momentum",
          type: "Quiz 2",
          due_date: "21/09/2022",
          status: "open",
          marks: "10",
        },
        {
          id: 4,
          title: "Velocity and Friction",
          type: "Quiz 2",
          due_date: "21/08/2022",
          status: "closed",
          marks: "10",
        }
      ],
    };
  }

  handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
 
    this.setState({
      open: !this.state.open
    });
  };
  handleClickEvent = () => {
    this.setState({
      open: !this.state.open
    });
  };

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen,
  });
};
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, title, type, due_date, status, marks } = student; 
      return (
        <div>
          <tr key={id} id="asgn-div">
            <td>
              <div id="assgn-vid-div">
                <Image
                  src={type.match(/quiz/i) ? qz : assgn}
                  alt="mqmin"
                  style={{ width: 50, height: 50, padding: "10px" }}
                />
              </div>
            </td>
            <td style={{ verticalAlign: "top", width: "806px" }}>
              <div style={{ width: "606px", marginLeft: "12px" }}>
                <span id="ass-title">
                  {type.match(/quiz/i) ? "Class X" : "Quiz"}
                </span>
                <br />
                <span id="stu-name">{title}</span>
                <br />
                <span
                  id="cc-lbl"
                  style={{ color: status.match(/open/i) ? "green" : "red" }}
                >
                  {status}&nbsp;
                </span>
                <span id="cc-lbl">
                  |&nbsp; Due &nbsp;{due_date}&nbsp;|&nbsp;
                </span>
                <span id="cc-lbl"> Credits &nbsp;</span>
                <span>{marks}</span>
              </div>
            </td>

            <td>
              <div id="stu-div" style={{ width: "140px" }}>
                {" "}
              </div>
            </td>
            <td>
            <div style={{textAlign: "right", width:"50px", marginLeft:"-150px"}}><span>Take Before </span></div>
                
                <div style={{textAlign: "left", width:"50px", marginLeft:"-80px", marginTop:"-40px"}}><SelelctCal className="input"/></div>
             
                <Image width={30} height={30} src={share} alt="Card image cap" onClick={this.handleClickEvent} />
               
                <Snackbar
		anchorOrigin={{
		horizontal: "right",
		vertical: "top",
		}}
		open={this.state.open}
		autoHideDuration={5000}
		message="Quiz Shared"
		onClose={this.handleToClose}
		action={
		<React.Fragment>
			<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={this.handleToClose}
			>
			<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment> 	}	/> 
            </td>
          </tr>
          <br />
          <div style={{marginLeft: "15px"}}>
               
                </div>
        </div>
      );
    });
    this.setState({
show: true,
    });
  }
  render() {
    const show = false;
    return (
      <div>
          <div className="row">
        <div className="col">
        <div className="onetag" style={{  marginTop: "12px" }}>
        <span >Share a quiz with your students to test their learning levels and generate meaningful insights </span>
        </div>
        </div>
     
      </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div style={{  marginRight:"33em" }}>
              
    

              &nbsp;
              <Image
                src={add_assgn}
                alt="add_assgn"
                onClick={this.toggleModal}
                style={{ width: 50, height: 50, padding: "5px"}}
              />
              <AddAssignmentModal show={this.state.isOpen} onClose={this.toggleModal}></AddAssignmentModal>
            </div>
          </div>
        </div>

        <table id="students" style={{ textAlign: "left" }}>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}


