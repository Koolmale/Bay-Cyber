import React, { Component } from 'react'
import Header from '../components/header';


class CalendarPg extends Component {
    render () {
        return(
            <div>
                <div>
                    <Header />
                </div>
                
                <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=wastc.org_i4bgfism9oafuf3b05sh57ofng%40group.calendar.google.com&amp;ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
        )
    }
}

export default CalendarPg;