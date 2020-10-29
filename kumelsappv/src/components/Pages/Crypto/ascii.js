import React,  { Component } from 'react'
import Tutoriallist from '../../BodyComponents/tutoriallist'
import TutorialList from '../../BodyComponents/tutoriallist'
import '../../../Assets/css/ascii.css'

class Ascii extends Component {
    render () {
        return (
        <>
    <div>
    <Tutoriallist />

    <h2 id='head'>ASCII Encoding <br/> By: Alec M</h2>


    <div id='body'>
    <p>
    ASCII, or the American Standard Code for Information Interchange, is an encoding scheme you will see everywhere in your journey into cryptology: it provides a standardized way to convert normal (English) text and many common symbols into something that can fit into an even 8 bits. The original standard only used 7 bits or 27 = 128 different characters and was built to accommodate the many different codes needed for teleprinters and telegraphs as you will see in a moment. Below is an ASCII chart, containing the characters in the original ASCII standard:
    </p>

    <img src={require('../../../Assets/css/ASCII.png')} alt='ASCIIchart' className='img3'/> <br />

    <p>
    In this chart, the left-most column is the character number, the next column is that number in hexadecimal, then binary groups into 2 groups of 4, and finally the character itself. Generally, when you come across to ASCII text translations it will be in hexadecimal, but sometimes you will be asked to translate decimal to ASCII text as you’ll see below.

You may notice that characters 0 through 31 are not a character but an acronym. They are called “Non-Printable Characters.” Back in the days of teleprinters and telegraphs, these “characters” were reserved for primarily communication functions, like SOH (start of heading), STX (start of text), CAN (cancel), and BEL (bell - ding). The ones you may see in challenges are LF (line feed), CR (carriage return), and HT (horizontal tab - or just tab).

The rest of the characters (excluding DEL) are the “Printable Characters”. The highlighted hexadecimal above are the ranges of hexadecimal you will work with primarily in addition to SP (space). 

    </p> <hr/>
    </div>

    <div id='body2'>
        <p>
        In practice, you will probably just use a tool like <a href='https://cryptii.com/pipes/hex-to-text' target='_blank'>https://cryptii.com/pipes/hex-to-text</a> or a method in your preferred programming language to encode or decode Now, sometimes you will get the result of something you decrypted as a number, but you need to convert it to ASCII. This generally comes in 2 forms: the output is separated into 1-3 digit numbers or it is a gigantic number with 10s of digits. For this, we will be using an online tool to do this, but you can easily use any base 10 to base 16 converter. <br/>

        <a href='https://www.mobilefish.com/services/big_number/big_number.php' target='_blank'>https://www.mobilefish.com/services/big_number/big_number.php </a>

        </p>
    </div>
    </div>
    </>
        )}};

export default Ascii;