import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export default function MessageBar() {

  const MyContainer = ({ handleToClose,open }) => {
    return (
  <Snackbar
  anchorOrigin={{
    horizontal: "left",
    vertical: "bottom",
  }}
  open={open}
  autoHideDuration={5000}
  message="Sample Warning"
  onClose={handleToClose}
  action={
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleToClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  }
/>)};
  };