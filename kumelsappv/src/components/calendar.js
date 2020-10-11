import React, { Component } from 'react'
import '../default.min.css';

class calendar extends Component {
    render () {
        return(
            <div id='calendar'>
            <h1>Upcoming Events!</h1>
            <iframe src="https://calendar.google.com/calendar/embed?src=wastc.org_i4bgfism9oafuf3b05sh57ofng%40group.calendar.google.com&amp;mode=AGENDA" style={{height:200, width:300}}>
            </iframe>
            </div>
        )
    }
}

export default calendar;