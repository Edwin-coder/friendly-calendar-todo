import React, { Component } from 'react'
import './Calender.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faLongArrowLeft, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export class Calender extends Component {

  // 7 cols , 6 rows

  render() {
    return (
      <div className="container">

        <div className='ctn-month'>
          <div className="ctn-arrow-month">
            <FontAwesomeIcon icon={faArrowLeft} size='2x' /> 
            <div className="preview-months">Feb</div>
          </div>
          <div className="current-month">March</div>
          <div className="ctn-arrow-month">
            <div className="preview-months">April</div>
            <FontAwesomeIcon icon={faArrowRight} size='2x' /> 
          </div>
        </div>

        <ol className="calender-content">
            <li className='day-name'>Sun</li>
            <li className='day-name'>Mon</li>
            <li className='day-name'>Tue</li>
            <li className='day-name'>Wed</li>
            <li className='day-name'>Thu</li>
            <li className='day-name'>Fri</li>
            <li className='day-name'>Sat</li>

            <li className='day-number'>1</li>

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
            <li className='day-number'>31</li>
    
        </ol>

      </div>
    );
  }
}

export default Calender