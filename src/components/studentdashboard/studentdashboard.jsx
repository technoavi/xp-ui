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
          <div style={{ marginTop: "-15em", position: "absolute",zIndex:"1" }}>
            <Image src={stu} alt="dashboard" />
          </div>
         
          <div style={{ display: "flex", justifyContent: "right", marginTop: "-22em", marginRight: "20px", position: "relative", zIndex:"1" }}>
            <img style={{
              width: "20%",
            }} src={logo} alt="logo" />
            </div>
            </a>
        </div>
      </section>
    );
  };
}

