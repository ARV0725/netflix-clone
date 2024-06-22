import React from 'react'
import './SignIn.css'
import {Link} from 'react-router-dom'
import { IoLanguage } from "react-icons/io5";

const SignIn = () => {
  return (
    <>
        <div className="main">
            <div className="header">
                <img src="../assets/Netflix_Logo.png" alt="netflix" />
            </div>
            <div className="container1">
                <h2>Sign In</h2>
                <div className="inputs">
                    <div className='user-input'><input type="text" /><span className='placeholder'>Email or Mobile Number</span></div>
                    <div className='user-input'><input type="password" /><span className='placeholder'>Password</span></div>
                    <input type="button" value="Sign In" className='signin-btn'/>
                    <p className='or'>OR</p>
                    <Link to='/SignIn2'><input type="button" value="Use a sign-in code" className='signin-code-btn'/></Link>
                    <p className='forget'>Forget Password?</p>
                </div>
                <div className="retrieve">
                    <div className="remember">
                        <input type="checkbox" id='check'/><p>Remember me</p>
                    </div>
                    <p className='new-signin'>New to Netflix? <Link className='signup-link' to='/Home'>Sign up now.</Link></p>
                </div>
                <p className='learnup'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='learnmore'>Learn more.</a></p>
            </div>
        </div>
        <div className="footer">
            <div className="ques"><p>Questions? Call</p><a>000-800-919-1694</a></div>
            <div className="links">
                <p>FAQ</p>
                <p>Help Centre</p>
                <p>Terms of Use</p>
                <p>Privacy</p>
                <p>Cookie Preference</p>
                <p>Corporate Information</p>
            </div>
            <div className="language">
                <select name="" id="">
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी</option>
                </select>
                <IoLanguage className='lang-icon'/>
            </div>
        </div>
    </>
  )
}

export default SignIn
