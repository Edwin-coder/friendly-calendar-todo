import React, { Component } from 'react'
import './Calender.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faLongArrowLeft, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevMonth: "",
      currentMonth: "",
      nextMonth: "",
      fistDayOfMonth: "",
      currentDate: "",
      lastDay: 0,
      year: "",
      monthNumber: null,
      currentYear: ""
    };
  }

  componentDidMount() {
    this.setCalenderData();
  }

  setCalenderData = (currMonth) => {
    
    // Ternary Operator 
    let currentDate = new Date().getDate();
    let date = !this.state.currentMonth ? new Date() : new Date(this.state.currentYear, currMonth, currentDate );

    // Return zero indexed month 
    let months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    let prevMonth = months[monthIndex - 1];
    let currentMonth = months[monthIndex];
    let nextMonth = months[monthIndex + 1];

    // Get first, current, and last day
    // Get week day
    var firstDay = new Date(year, monthIndex, 1).getDay();
    // Get number of last day
    var lastDay = new Date(year, monthIndex + 1,0).getDate();
  
  
    this.setState({
      prevMonth: prevMonth,
      currentMonth: currentMonth,
      nextMonth: nextMonth,
      currentDate: currentDate,
      fistDayOfMonth: firstDay,
      lastDay: lastDay,
      currentYear: year,
      monthNumber: monthIndex
    });
  };

  // This function depends on current state of : firstDayOfMonth, lastDay, currentDate
  CalenderDays = () => {
    let todaysDate = new Date();
    let todaysMonth = todaysDate.getMonth();
    let todaysYear = todaysDate.getFullYear();
    let daysInMonths = [];

    // 
    let emptySlots = this.state.fistDayOfMonth;
    while (emptySlots > 0) {
      // console.log({'emptySlots': emptySlots })
      daysInMonths.push(<li className="empty"></li>);
      emptySlots--;
    }

    for (let i = 1; i <= this.state.lastDay; i++) {
      if (this.state.currentDate === i && this.state.monthNumber === todaysMonth && this.state.currentYear === todaysYear) {
        daysInMonths.push(<li className="day-number current-date" data-id={i}>{i}</li>);
      } else {
        daysInMonths.push(<li className="day-number" data-id={i}>{i}</li>);
      }
    }
 
    return daysInMonths;
  
  };

  changeMonthHandler = (e) => {
    e.stopPropagation();
    let target = e.currentTarget.dataset.name
    console.log(target)

    if (target === "next") {

      let increasedMonthIndex = this.state.monthNumber += 1;
      
      this.setCalenderData(increasedMonthIndex);

    } else if (target === "previous") {

      let decreasedMonthIndex = this.state.monthNumber -= 1;
      
      this.setCalenderData(decreasedMonthIndex);
    }

  }

  // 7 cols , 6 rows

  render() {
    return (
      <div className="container">
        <div className="ctn-month">
          <div className="ctn-arrow-month">
            <FontAwesomeIcon icon={faArrowLeft} size="2x"  className='next-icon' data-name="previous" onClick={this.changeMonthHandler}  />
            <div className="preview-months">{this.state.prevMonth}</div>
          </div>
          <div className="current-month" onClick={this.newDateHandler}>{this.state.currentMonth} {this.state.currentYear}</div>
          <div className="ctn-arrow-month">
            <div className="preview-months">{this.state.nextMonth}</div>
            <FontAwesomeIcon icon={faArrowRight} size="2x"  className='next-icon'  data-name="next"  onClick={this.changeMonthHandler}  />
          </div>
        </div>

        <ol className="calender-grid">
          <li className="day-name">Sun</li>
          <li className="day-name">Mon</li>
          <li className="day-name">Tue</li>
          <li className="day-name">Wed</li>
          <li className="day-name">Thu</li>
          <li className="day-name">Fri</li>
          <li className="day-name">Sat</li>

          {this.CalenderDays()}
        </ol>
      </div>
    );
  }
}

export default Calender


