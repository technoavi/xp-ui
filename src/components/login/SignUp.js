import React, { Component } from "react";
import lock from "../../assets/lock_sm.svg";
import user_sm from "../../assets/user_sm.png";
import { Modal } from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.png";
import Form from 'react-bootstrap/Form'
import { Redirect } from "react-router-dom";
import "./signup.css";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import UserIcon from "../../assets/user.svg";
import Snackbar from '@material-ui/core/Snackbar';



export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {

      isOpen: false,
      redirect: false,
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
      showPassword: false,
      usernameError: false,
      passwordError: false,
      popShow: false,
      vertical: 'top',
      horizontal: 'right',
      popMessage: '',
      userName: '',
      userNameError: false,
      errorMessages: {},
      isSubmitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleCloseModel = this.handleCloseModel.bind(this);

  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };



  handleCloseModel() {
    this.setState({ popShow: false });
  }
  handleChange(event) {
    if (event.target.name === "username") {

      const isError = (event.target.value !== '') ? false : true;
      this.setState({
        username: event.target.value,
        usernameError: isError
      });

    } else if (event.target.name === "password") {

      const isError = (event.target.value !== '') ? false : true;
      this.setState({
        password: event.target.value,
        passwordError: isError
      });

    } else if (event.target.name === 'uname') {
      console.log("un : " + event.target.name.value)
      const isError = (event.target.value !== '') ? false : true;
      this.setState({
        userName: event.target.value,
        userNameError: isError
      });
    }
  };


  loginClicked(event) {

    if (this.state.username === '' && this.state.password === '') {
      this.setState({
        usernameError: true,
        passwordError: true
      });
    }
    else if ((this.state.username === "admin" && this.state.password === "123")) {

      localStorage.setItem("teach", "T");
      this.setState({
        islogged: true
      });
    }
    else if ((this.state.username === "user" && this.state.password === "123")) {

      localStorage.setItem("stu", "S");
      this.setState({
        islogged: true
      });
    }
    else {
      console.log("API integration required", this.state.username, this.state.password)
    }
    event.preventDefault();
  }

  handleUserName(event) {
    console.log("username : ", this.state.userName);
    event.preventDefault();

    const isError = (this.state.userName !== '') ? false : true;
    if (isError) {
      this.setState({
        userNameError: isError
      });
      return;
    } else {
      this.setState({
        popShow: true,
        popMessage: 'Message Send Successfully',
        isOpen: false
      });
    }
  }



  render() {
    if (localStorage.getItem("teach")) {
      return <Redirect to="/tc" />;
    }
    else if (localStorage.getItem("stu")) {
      return <Redirect to="/sd" />;
    }
    return (


      <div id="bg">

        <div className="row" style={{ marginTop: "120px" }}>
          <div
            className="col"
            style={{ marginLeft: "200px", display: "grid" }}
          >
            <div style={{ textAlign: "left" }}>
              <span id="phrase-txt">
                Learn, Understand <br />
                & Grow together to <br />
                <span style={{ color: "#fe5d00" }}>
                  <u>improve</u>
                </span>{" "}
                your future.
              </span>
              <br />
              <br />
            </div>
            <div style={{ textAlign: "left" }}>
              <span id="phrase-txt-2">
                A modern learning environment where <br />
                students develop using innovative learning <br />
                methods
              </span>
            </div>
          </div>
          <div className="col">
            <div style={{ display:"flex",justifyContent:"right", marginTop: "-32em",  marginBottom: "-5em", marginRight:"20px" }}>
               <img style={{
                  width: "40%", 
                }} src={logo} alt="logo" /></div>
            <div id="login-Rectangle">
         
              <img
                src={UserIcon}
                alt="USER"
                style={{ height: "80px", width: "80px", marginTop: "-46px" }}
              />
              <br />
              <span id="Welcome-back">Welcome back,</span>
              <br />
              <span id="Please-login-to-your" style={{ marginTop: "34px" }}>
                Please login to your account.
              </span>
              <br />
              <form >
                <div style={{ textAlign: "left", marginLeft: "56px" }}>
                  <div>
                    <div
                      className="row"
                      style={{ textAlign: "left", marginTop: "12px" }}
                    >
                      <div
                        className="col-1"
                        style={{ padding: "0px", marginTop: "20px" }}
                      >
                        <img
                          src={user_sm}
                          alt="USER"
                          style={{ height: "25px", width: "25px" }}
                        />
                      </div>
                      <div className="col">
                        <FormControl style={{ width: "250px" }}>
                          <InputLabel htmlFor="standard-adornment-text">
                            Username
                          </InputLabel>
                          <Input
                            name="username"
                            id="standard-adornment-text"
                            value={this.state.username}
                            onChange={(e) => this.handleChange(e)}
                          // endAdornment={<InputAdornment position="end" />}
                          />
                        </FormControl>
                        <br></br>

                        {this.state.usernameError ? <span className="error_msg">Username required</span> : ''}
                      </div>
                    </div>

                    <div
                      className="row"
                      style={{ textAlign: "left", marginTop: "12px" }}
                    >
                      <div
                        className="col-1"
                        style={{ padding: "0px", marginTop: "20px" }}
                      >
                        <img
                          src={lock}
                          alt="USER"
                          style={{ height: "25px", width: "25px" }}
                        />
                      </div>
                      <div className="col">
                        <FormControl style={{ width: "250px" }}>
                          <InputLabel htmlFor="standard-adornment-password">
                            Password
                          </InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={this.state.showPassword ? "text" : "password"}
                            value={this.state.password}
                            name="password"
                            onChange={(e) => this.handleChange(e)}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={this.handleClickShowPassword}
                                >
                                  {this.state.showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {this.state.passwordError ? <span className="error_msg">Password required</span> : ''}

                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                  <span
                    id="Forgot-password"
                    onClick={this.toggleModal}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <u>Forgot password?</u>
                  </span>

                  {/* <Modal show={this.state.isOpen} onClose={this.toggleModal} /> */}

                  <Dialog open={this.state.isOpen} onClose={this.toggleModal} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        To send rest password link to your registered email, please enter your username here.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Username"
                        type="text"
                        name="uname"
                        value={this.state.userName}
                        onChange={(e) => this.handleChange(e)}
                        fullWidth
                      />

                      {this.state.userNameError ? <span className="error_msg">Username required</span> : ''}

                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.toggleModal} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={(e) => this.handleUserName(e)} color="primary">
                        Submit
                      </Button>
                    </DialogActions>
                  </Dialog>


                </div>{" "}
                <br />
                <button id="Login-Btn" onClick={(e) => this.loginClicked(e)}>
                  <span id="LOG-IN">LOGIN</span>
                </button>

              </form>
              <span id="Please-login-to-your" style={{ marginTop: "34px", color: "black" }}>
              Teacher - > admin/123 && Student - > user/123
              </span>
            </div>
          </div>

        </div>

        <Snackbar
          anchorOrigin={{ "vertical": this.state.vertical, "horizontal": this.state.horizontal }}
          open={this.state.popShow}
          onClose={this.handleCloseModel}
          message={this.state.popMessage}
          autoHideDuration={5000} />



      </div>

    );
  }
}
 