import React from "react";

import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import stu from "../../assets/student.png";
export default class StudentDashboard extends React.Component {


  render() {

  

    return (
      <section className="blog">

        <div>
     
          <div style={{ position: "absolute",zIndex:"1" , marginRight:"1em"}}>
            <Image src={stu} alt="dashboard"  style={{
              position: "fixed",marginTop: "2em", 
              top: 0,
              left: 0,
              
            
              maxWidth: "100%",
            }} />
          </div>
         
          <div style={{ display: "flex", justifyContent: "right", marginTop: "-22em", marginRight: "20px", position: "relative", zIndex:"1" }}>
            <img style={{
              position: "fixed",marginTop: "-6em", 
              top: 0,
              right: 0,
              width: "20%",
            }} src={logo} alt="logo" />
            </div>
            position: absolute;
  
 
            <div style={{ position: "absolute" , marginRight:"2em" ,   display: "flex",   right:"4em",
    top: "-12em",  marginTop: "57em"}}>
             
            <a href="/st" > <button style={{    width: "500px",     fontSize: "1.5rem"}}>Proceed to learn </button>      </a>
            </div>
        </div>
      </section>
    );
  };
}

