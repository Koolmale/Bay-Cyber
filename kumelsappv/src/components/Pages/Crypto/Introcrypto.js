import React,  { Component } from 'react'
import '../../../Assets/css/introcrypto.css'
import TutorialList from '../../BodyComponents/tutoriallist'


export const IntroCrypto = () => (
    <>

<TutorialList />

    <h1>Introduction to Cryptography <br/> By: Alec M</h1>

    <p className='p'>
    Since the beginning of communication, there has been a need for securely transmitting messages from one place to another. While the history of cryptology is an interesting one, we do not have time to go over it. If you have time to do some reading, Simon Singh’s The Code Book is a great introduction to cryptology in the historical context, and I recommend anyone interested read this book. You can view a pdf of it here: <a href='http://www.it-docs.net/ddata/773.pdf' target='_blank'>it-docs.net/ddata/773.pdf.</a> <br/>

The field of crypto is huge and involves more than just encrypting messages (in fact, we have a section dedicated to hashing, a subsection of crypto), but we will do our best to prepare you of the basics of this field. Before we start, I would like to lay down the ground rule of mastery:<br/>

<b>If you want to master the techniques presented in these training modules, do them in a step-by-step manner BEFORE using automatic systems.</b> <br />

There are a few exceptions where I do not expect you to do stuff in this way, such as base64, and “step-by-step” still can be tool-assisted, just not a tool where you “plug it in and get the answer.” These training materials are created to help give you a basic overview of everything, but like almost anything math related, concepts build on each other.<br/>

In addition, cryptology is very much a team sport: the more people you have working on one problem, the more insights your group will have to crack ciphers, and crypto is very much a kind of a logic puzzle!

Now that is out of the way, let’s start with some terminology.

    </p>

    <h2>Terminology:</h2>
    <table>
        <tr>
            <th>Term</th>
            <th>Definition</th>
        </tr>

        <tr>
            <td>
            "Crypto"
            </td>
            <td>"Crypto"</td>
        </tr>

        <tr>
            <td>Cryptography</td>
            <td>
The study of encryption, decryption, and creation of new ciphers
</td>
        </tr>

        <tr>
            <td>Cryptology</td>
            <td>
The study of creating and breaking ciphers
</td>
        </tr>

        <tr>
            <td>
                Encoding
            </td>
            <td>
            Also called "codes", converts something from one form to another using a well-known encoding system. Does not offer privacy or security.
            </td>
        </tr>

        <tr>
            <td>Encryption</td>
            <td>Also called "ciphers", secures a message in a way that only the intended recipient can read the message</td>
        </tr>

        <tr>
            <td>Plaintext</td>
            <td>Readable text that is not encrypted. Generally, plaintext will be in lowercase.</td>
        </tr>

        <tr>
            <td>Ciphertext</td>
            <td>Encrypted or Encoded text that is not readable. Generally, ciphertext will be in uppercase</td>
        </tr>
    </table>
    </>
)

export default IntroCrypto;