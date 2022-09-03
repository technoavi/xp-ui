import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default SelectCal  => {
    const [startDate, setStartDate] = useState(new Date());
    const MyContainer = ({ className, children }) => {
      return (
        <div style={{  color: "#fff" , width:"10px", height:"30%"}}>
          <CalendarContainer className={className}>
            <div style={{ background: "#f0f0f0" , textAlign:"center", color: "#ff0000"}}>
            Students to consume this before
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
        showTime={{ use12Hours: true, format: "hh:mm A" }}

        dateFormat="dd-MM-yyyy hh:mm aa"
        onChange={(date) => setStartDate(date)}
        calendarContainer={MyContainer}
      />
    );
  };