import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            isClicked_about: false,
            isClicked_breaking_news: false,
            isClicked_contact: false,
            isClicked_home: true
        }
    }

    render() {
    
        return (
            <div className = {this.props.containerName}>


               
                <ul className = {`${this.props.className}_elem_1`}> 
                    <Link to = '/' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_home ? '0px solid white': 'none', fontSize: this.state.isClicked_home && this.props.header ?'5vh': ''}} onClick = {() => this.setState({
                        isClicked_about: false,
                        isClicked_breaking_news: false, 
                        isClicked_contact: false,
                        isClicked_home: true
                    }, window.scrollTo(0,0))}>
                        Home
                    </Link>
                </ul>
            
            
                <ul className = {`${this.props.className}_elem_2`} >
                    <Link to = '/' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_breaking_news ? '0px solid white': 'none', fontSize: this.state.isClicked_breaking_news && this.props.header ?'5vh': ''}} onClick = {() => this.setState({
                        isClicked_breaking_news: true,
                        isClicked_about: false,
                        isClicked_contact: false,
                        isClicked_home: false
                    })}>
                        Breaking News
                    </Link>
                </ul>
            

            
                <ul className = {`${this.props.className}_elem_3`}>
                    <Link to = '/' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_about ? '0px solid white': 'none', fontSize: this.state.isClicked_about && this.props.header ?'5vh': ''}} onClick = {() => this.setState({
                        isClicked_about: true,
                        isClicked_breaking_news: false, 
                        isClicked_contact: false,
                        isClicked_home: false
                    })}>
                        About
                    </Link>
                </ul>
            

        
                <ul className = {`${this.props.className}_elem_4`}>
                    <Link to = '/' style={{textDecoration: 'none', color: 'black', border: this.state.isClicked_contact ? '0px solid white': 'none', fontSize: this.state.isClicked_contact && this.props.header ? '5vh': ''}} onClick = {() => this.setState({
                        isClicked_about: false,
                        isClicked_breaking_news: false, 
                        isClicked_contact: true,
                        isClicked_home: false
                    })}>
                        Contact
                    </Link>
                </ul>


            
            </div>
        )
    }

}


export default Nav