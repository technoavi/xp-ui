import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default SelectCal  => {
    const [startDate, setStartDate] = useState(new Date());
    const MyContainer = ({ className, children }) => {
      return (
        <div style={{ padding: "10px", background: "#216ba5", color: "#fff" , width:"10px", height:"40%"}}>
          <CalendarContainer className={className}>
            <div style={{ background: "#f0f0f0" , textAlign:"center"}}>
              Select a date for publish
            </div>
            <div style={{ position: "relative" }}>{children}</div>
          </CalendarContainer>
        </div>
      );
    };
    return (
      <DatePicker
        selected={startDate}
        showTimeSelect
        dateFormat="Pp"
        onChange={(date) => setStartDate(date)}
        calendarContainer={MyContainer}
      />
    );
  };