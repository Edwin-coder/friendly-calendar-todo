import React, { Component } from 'react'
import './Calender.css'

export class Calender extends Component {

  // 7 cols , 6 rows

  render() {
    return (
      <div className="container">

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