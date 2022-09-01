import React, { Component } from "react";
import { Router, Route, Switch,Redirect } from "react-router-dom";
import  Course  from "./components/course/Course";
import ModuleTab from "./components/module/ModuleTab";
import SignUp from "./components/login/SignUp";
import './App.css';
import { Header } from "./components/header/Header";
import StuModuleTab from "./components/student/StuModuleTab";
import history from './history';
import Mycalendar from "./components/calendar/Mycalendar";
import StudentDashboard from "./components/studentdashboard/studentdashboard";
import { AfterClass } from "./components/afterclass/AfterClass";
import DuringCourse from "./components/duringclass/DuringCourse";
import PostClassRoom from "./components/postclassroom/PostClassRoom";
class Home extends Component {
  render() {
      
    return (
      <div>
        <Router history={history}>
          <>
          {/* <Header /> */}
       
      
            <Switch>
            <Route exact path="/">
    <Redirect to="/login" exact component={SignUp} />
    </Route>
    <Route path="/cc" exact component={Mycalendar} />
    <Route path="/sd" exact component={StudentDashboard} />
            <Route path="/login" exact component={SignUp} />
            <Route path="/dc" exact component={DuringCourse} />
            <Route path="/pc" exact component={PostClassRoom} />
            <Route path="/md" exact component={ModuleTab} />
            <Route path="/tc" exact component={Course} />
            <Route path="/st" exact component={StuModuleTab} />
            <Route path="/af" exact component={AfterClass} />
          
            </Switch>
          </>
       
        </Router>
      </div>
    );
  }
}
export default Home;
