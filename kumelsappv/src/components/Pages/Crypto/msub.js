import React,  { Component } from 'react'
import TutorialList, { Tutoriallist } from '../../BodyComponents/tutoriallist'
import '../../../Assets/css/msub.css'

class Msub extends Component {
    render () {
        return (
            <>
            <Tutoriallist />
            <div>
                <h2 id='title2'>Monoalphabetic Substitution Cipher <br/> By: Alec M</h2>
                <p id='body4'>
                AKA “Cryptoquips” or “Cryptograms”, Monoalpabetic Substitution Ciphers are a fairly fundamental cipher that you should know and is a cipher that CTFs use all the time. The concept behind the cipher is that you take the alphabet and then scramble into some order. Remember the table of plaintext letters to ciphertext letters? All we are doing is now just scrambling the table to anything we want. For example:
                </p>

                <table id='tabl'>
                    <tr>
                        <th>Plaintext</th>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>e</td>
                        <td>f</td>
                        <td>g</td>
                        <td>h</td>
                        <td>i</td>
                        <td>j</td>
                        <td>k</td>
                        <td>l</td>
                        <td>m</td>
                        <td>n</td>
                        <td>o</td>
                        <td>p</td>
                        <td>q</td>
                        <td>r</td>
                        <td>s</td>
                        <td>t</td>
                        <td>u</td>
                        <td>v</td>
                        <td>w</td>
                        <td>x</td>
                        <td>y</td>
                        <td>z</td>
                    </tr>

                    <tr>
                    <th>Ciphertext</th>
                    <td>Z</td>
                    <td>Y</td>
                    <td>X</td>
                    <td>Q</td>
                    <td>F</td>
                    <td>M</td>
                    <td>O</td>
                    <td>J</td>
                    <td>P</td>
                    <td>R</td>
                    <td>G</td>
                    <td>U</td>
                    <td>T</td>
                    <td>C</td>
                    <td>D</td>
                    <td>S</td>
                    <td>W</td>
                    <td>B</td>
                    <td>H</td>
                    <td>E</td>
                    <td>K</td>
                    <td>V</td>
                    <td>A</td>
                    <td>I</td>
                    <td>N</td>
                    <td>L</td>
                    </tr>
                </table>
            </div>

            <div id='body5'>
                <p>
                Each letter appears just once in the top and just once in the bottom. If we want to encrypt a letter, we find it in the Plaintext row and see what it encrypts to in the Ciphertext row, and if we want to decrypt, we do the reverse: look for the letter in the Ciphertext row and find the corresponding Plaintext letter. Note that every letter in the plaintext always encrypts to the same ciphertext letter. This is why it is called a “monoalphabetic substitution” cipher, as there is only “one” alphabet scrambling used to encrypt the message.
                </p>

                <p>
                However, in practice randomly scrambling the letter is not the most elegant solution to coming up with keys. Sometimes in CTFs and problems, you may get a keyword to create the table that you’ll need to decrypt the message or while you are decrypting, you might notice that this is the method they used. The easiest way to show this is through an example.
                <ol>
                    <li>Choose/get your keyword. For this example, I will be using “cryptology”, though you can use pretty much any word you want. </li>

                    <li>Remove duplicate letters. The world cryptology uses a few repeated letters, and removing the second and after instances of these duplicate letters.</li>
                    <li>Make a table of plaintext/ciphertext letters with the plaintext in alphabetical order, and the cipher text starting with the first letter at plaintext a, second letter at plaintext b, and so on.</li>
                    <li>inally, fill in the rest of the ciphertext starting at a and going to z, skipping letters we already used. Starting with a and b, we put those under i and j, but we already used c, so the next letter we fill is d under k. You will know if you did this correctly as this method should produce an order of all 26 letters appearing exactly once.</li>

                </ol>
                </p>
            </div>
            </>
        )
    }
}

export default Msub;