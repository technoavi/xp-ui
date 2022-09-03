import React from "react";

import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import stu from "../../assets/student.png";
export default class StudentDashboard extends React.Component {


  render() {

  

    return (
      <section className="blog">

        <div>
        <a href="/st" >
          <div style={{ position: "absolute",zIndex:"1" , marginRight:"1em"}}>
            <Image src={stu} alt="dashboard"  style={{
              position: "fixed",marginTop: "4em", 
              top: 0,
              left: 0,
              
            
              maxWidth: "100%",
            }} />
          </div>
         
          <div style={{ display: "flex", justifyContent: "right", marginTop: "-22em", marginRight: "20px", position: "relative", zIndex:"1" }}>
            <img style={{
              position: "fixed",marginTop: "-4em", 
              top: 0,
              right: 0,
              width: "20%",
            }} src={logo} alt="logo" />
            </div>
            </a>
        </div>
      </section>
    );
  };
}

