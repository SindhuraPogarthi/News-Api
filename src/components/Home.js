import React from 'react'
import './News.css'
import News from './News.js'
import myimg from './download.png'
import github from './github.jpeg'


<script src="https://kit.fontawesome.com/c8347a6298.js" crossorigin="anonymous"></script>
export default function Home() {
    return (
        <>
            <nav className="nav">
                <div>
                    <h4 id="h">InfoStream</h4>
                </div>


            </nav>

            <div className='base'>
                <div>
                    <h4>Your Gateway to <br></br>
                        <span>Daily News</span><br></br>
                        and  <br></br>
                        <span>Relevant Updates</span><br></br> Straight to You."</h4>

                </div>
                <div className='in'>
                    <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="imgae" />
                </div>


            </div>

            <News />
            <footer style={{height:"120px"}}>

                <div >
                    <p style={{ color: "rgb(217,33,124)" }}>Follow Us</p>

                    <div className='footerimage'>
                        <a href="https://www.linkedin.com/in/sindhurapogarthi/" target="_blank" rel="noreferrer">
                            <img src={myimg} alt="LinkedIn Profile" />
                        </a>
                        <a href="https://github.com/SindhuraPogarthi" target="_blank" rel="noreferrer">
                            <img src={github} alt="LinkedIn Profile" />
                        </a>
                        <div>
                            Terms of Service | Privacy Policy | API Documentation

                            © [Current Year] [Your Company Name]. All rights reserved.
                        </div>
                    </div>


                </div>
                <div>


                </div>

            </footer>
        </>
    )
}
