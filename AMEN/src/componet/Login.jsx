import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export const Login = () => {
  return (
    <div className='Balerions'>
      <div className='Aegons'>
        <h2>TXT☠RAFA</h2>
        <p>Sign up to see photos and videos from your friends.</p>

        <div className='face-bookss'>
          <Link to="https://facebook.com"><i class="fa-brands fa-square-facebook"></i></Link>
          <Link to="https://facebook.com"><h4>Log in with Facebook</h4></Link>
        </div>
        <h3>OR</h3>
        <form action="Sumbiteds">
          <div className='datats'>
            <input type="text" placeholder='Phone Number, Email' />
          </div>
          <div className='datats'>
            <input type="password" placeholder='Password' />
          </div>
          <div className='datats'>

            <input type="text" placeholder='Name' />
          </div>
          <div className='datats'>

            <input type="text" placeholder='Uesrname' />
          </div>

          <div className="nop">
          <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
        </div>

        <div className="nops">
            <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
          </div>
          <div className='Sumbitedss '>
            <button >Signup</button>
          </div>

        </form>

       

      </div>
      <div className="Signup-boxs">
        <h5>Don't have an account?</h5>
        <Link to={"/signup"}>Login</Link>

      </div>

    </div>
  )
}
export default Login
