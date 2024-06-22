import React, { useState } from 'react'
import { VscAdd, VscClose } from "react-icons/vsc";
import { IoLanguage } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {

    const [questioner1, setQuestioner1] = useState(false);
    const [questioner2, setQuestioner2] = useState(false);
    const [questioner3, setQuestioner3] = useState(false);
    const [questioner4, setQuestioner4] = useState(false);
    const [questioner5, setQuestioner5] = useState(false);
    const [questioner6, setQuestioner6] = useState(false);

  return (
    <>
        <div className="home-background">
            <div className="header">
                <img src='..\assets\Netflix_Logo.png' alt='logo'/>
                <div className='header-buttons'>
                <select>
                    <option>English</option>
                    <option>हिन्दी</option>
                </select>
                <IoLanguage className='lang'/>
                <Link to="/SignIn"><input type='button' value="Sign In" /></Link>
                </div>
            </div>
            <div className="home-body">
                <h1>Unlimited movies, TV shows and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="home-body-register">
                    <div className='home-body-register-input'><input type='text' /><span className='placeholder1'>Email Address</span></div>
                    <div className="home-body-register-button"><input type='button' value='Get Started' /><span><FaAngleRight /></span></div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="container-1">
            <div className='container-details-1'> <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='vid1'>
                <video src='../Assets/tv1.m4v' autoPlay playsInline muted loop/>
                <img src='../Assets/tv.png' className='vid1-1' />
            </div>
        </div>
        <hr></hr>
        <div className="container-2">
            <div className="vid2">
                <img src='../Assets/img1-1.jpg' />
                <div className='img-img'>
                    <img className="img1" src='../Assets/img1-2.png'/>
                    <div className='img-t'>
                    <p className='img-t1'>Stranger Things</p>
                    <p className='img-t2'>Downloading...</p>
                    </div>
                    <img className="img2" src='../Assets/download-icon.gif'/>
                </div>
            </div>
            <div className="container-details-2">
                <h1>Download your shows to watch offline</h1>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
        <hr></hr>
        <div className="container3">
            <div className="container-details-1">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="vid3">
                <video src='../Assets/tv4.m4v' autoPlay playsInline muted loop />
                <img src='../Assets/tv2.png' />
            </div>
        </div>
        <hr></hr>
        <div className="container-4">
            <div className="vid4">
            <img src='../Assets/img4.png' />
            </div>
            <div className="container-details-2">
                <h1>Create profiles for kids</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
        <hr></hr>
        <div className="container-5">
            <h1>Frequently Asked Questions</h1>
            <div className="questions">
                <div><div className="question">What is Netflix?<div className='add'>{!questioner1 &&<VscAdd onClick={() => setQuestioner1(!questioner1) & setQuestioner2(false) & setQuestioner3(false) & setQuestioner4(false) & setQuestioner5(false) & setQuestioner6(false)} />}{questioner1 &&<VscClose onClick={() => setQuestioner1(!questioner1)}/>}</div></div>
                    {questioner1 && <div className='question-answer'>
                        <p className='para1'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </div>}
                </div>
                <div>
                    <div className="question">How much does Netflix cost?<div className='add'>{!questioner2 &&<VscAdd onClick={() => setQuestioner2(!questioner2) & setQuestioner1(false) & setQuestioner3(false) & setQuestioner4(false) & setQuestioner5(false) & setQuestioner6(false)}/>}{questioner2 &&<VscClose onClick={() => setQuestioner2(!questioner2)}/>}</div></div>
                    {questioner2 && <div className='question-answer'><p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                    </div>}
                </div>
                <div>
                    <div className="question">Where can I watch?<div className='add'>{!questioner3 &&<VscAdd onClick={() => setQuestioner3(!questioner3) & setQuestioner2(false) & setQuestioner1(false) & setQuestioner4(false) & setQuestioner5(false) & setQuestioner6(false)}/>}{questioner3 &&<VscClose onClick={() => setQuestioner3(!questioner3)}/>}</div></div>
                    {questioner3 && <div className='question-answer'>
                        <p className='para1'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>}
                </div>
                <div>
                    <div className="question">How do I cancel?<div className='add'>{!questioner4 &&<VscAdd onClick={() => setQuestioner4(!questioner4) & setQuestioner2(false) & setQuestioner3(false) & setQuestioner1(false) & setQuestioner5(false) & setQuestioner6(false)}/>}{questioner4 &&<VscClose onClick={() => setQuestioner4(!questioner4)}/>}</div></div>
                    {questioner4 && <div className='question-answer'>
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>}
                </div>
                <div>
                    <div className="question">What can I watch on Netflix?<div className='add'>{!questioner5 &&<VscAdd onClick={() => setQuestioner5(!questioner5) & setQuestioner2(false) & setQuestioner3(false) & setQuestioner4(false) & setQuestioner1(false) & setQuestioner6(false)}/>}{questioner5 &&<VscClose onClick={() => setQuestioner5(!questioner5)}/>}</div></div>
                    {questioner5 && <div className='question-answer'>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>}
                </div>
                <div>
                    <div className="question">Is Netflix good for kids?<div className='add'>{!questioner6 &&<VscAdd onClick={() => setQuestioner6(!questioner6) & setQuestioner2(false) & setQuestioner3(false) & setQuestioner4(false) & setQuestioner5(false) & setQuestioner1(false)}/>}{questioner6 &&<VscClose onClick={() => setQuestioner6(!questioner6)}/>}</div></div>
                    {questioner6 && <div className='question-answer'>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>}
                </div>
            </div>
            <div className="freq-ques">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="freq-ques-sign">
                <div className='home-body-register-input'><input type='text' /><span className='placeholder1'>Email Address</span></div>
                <div className="home-body-register-button"><input type='button' value='Get Started' /><span><FaAngleRight /></span></div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="cont-footer">
            <p>Questions? Call <a>000-800-919-1694</a></p>
            <div className="tags-all">
                <div className="tags">
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>Investor Relations</a></li>
                        <li><a>Privacy</a></li>
                        <li><a>Speed Test</a></li>
                    </ul>
                </div>
                <div className="tags">
                    <ul>
                        <li><a>Help Centre</a></li>
                        <li><a>Jobs</a></li>
                        <li><a>Cookie Preferences</a></li>
                        <li><a>Legal Notices</a></li>
                    </ul>
                </div>
                <div className="tags">
                    <ul>
                        <li><a>Account</a></li>
                        <li><a>Ways to Watch</a></li>
                        <li><a>Corporate Information</a></li>
                        <li><a>Only on Netflix</a></li>
                    </ul>
                </div>
                <div className="tags">
                    <ul>
                        <li><a>Media Centre</a></li>
                        <li><a>Terms of Use</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-buttons'>
            <IoLanguage className='lang'/>
                <select>
                    <option>English</option>
                    <option>हिन्दी</option>
                </select>
            </div>
            <div className="foot-cp"><p>Netflix India</p></div>
        </div>
    </>
  )
}

export default Home
