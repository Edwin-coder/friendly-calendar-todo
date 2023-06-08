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
    };
  }

  componentDidMount() {
    this.setCalenderData();
  }

  setCalenderData = () => {
    let date = new Date();

    // Return zero indexed month 
    let months = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let prevMonth = months[date.getMonth() - 1];
    let currentMonth = months[date.getMonth()];
    let nextMonth = months[date.getMonth() + 1];

    // Get first, current, and last day
    let currentDate = date.getDate();
    // Get week day
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    // Get number of last day
    var lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
  
   

    let year = date.getFullYear();

    this.setState({
      prevMonth: prevMonth,
      currentMonth: currentMonth,
      nextMonth: nextMonth,
      currentDate: currentDate,
      fistDayOfMonth: firstDay,
      lastDay: lastDay,
    });
  };

  CalenderDays = () => {
    let daysInMonths = [];
    // 
    let emptySlots = this.state.fistDayOfMonth;
    while (emptySlots > 0) {
      console.log(emptySlots)
      daysInMonths.push(<li className="empty"></li>);
      emptySlots--;
    }

    for (let i = 1; i <= this.state.lastDay; i++) {
      if (this.state.currentDate === i) {
        daysInMonths.push(<li className="day-number current-date" data-id={i}>{i}</li>);
      } else {
        daysInMonths.push(<li className="day-number" data-id={i}>{i}</li>);
      }
    }
    return daysInMonths;
  };

  // 7 cols , 6 rows

  render() {
    return (
      <div className="container">
        <div className="ctn-month">
          <div className="ctn-arrow-month">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            <div className="preview-months">{this.state.prevMonth}</div>
          </div>
          <div className="current-month">{this.state.currentMonth}</div>
          <div className="ctn-arrow-month">
            <div className="preview-months">{this.state.nextMonth}</div>
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
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


{/* <li className='day-number'>1</li>

<li className='day-number'>2</li>
<li className='day-number'>3</li>
<li className='day-number'>4</li>
<li className='day-number'>5</li>
<li className='day-number'>6</li>
<li className='day-number'>7</li>
<li className='day-number'>8</li>
<li className='day-number'>9</li>
<li className='day-number'>10</li>
<li className='day-number'>11</li>
<li className='day-number'>12</li>
<li className='day-number'>13</li>
<li className='day-number'>14</li>
<li className='day-number'>15</li>
<li className='day-number'>16</li>
<li className='day-number'>17</li>
<li className='day-number'>18</li>
<li className='day-number'>19</li>
<li className='day-number'>20</li>
<li className='day-number'>21</li>
<li className='day-number'>22</li>
<li className='day-number'>23</li>
<li className='day-number'>24</li>
<li className='day-number'>25</li>
<li className='day-number'>26</li>
<li className='day-number'>27</li>
<li className='day-number'>28</li>
<li className='day-number'>29</li>
<li className='day-number'>30</li>
<li className='day-number'>31</li> */}