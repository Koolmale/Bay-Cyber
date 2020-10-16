import React, { Component } from 'react'


class Calendarpg extends Component {
    render () {
        return(
            <div id='calendar'>
            <h2 style={{textAlign:"center"}}>Check out all of our upcoming events!</h2>
            <iframe src="https://calendar.google.com/calendar/embed?src=wastc.org_i4bgfism9oafuf3b05sh57ofng%40group.calendar.google.com&amp;ctz=America%2FLos_Angeles" style={{border: "0", width:"80vw", height: "80vh",frameborder:"0", scrolling:"no", position: "relative", marginRight:"7vw", marginTop:"3vh"}}></iframe>
            </div>
        )
    }
}

export default Calendarpg;