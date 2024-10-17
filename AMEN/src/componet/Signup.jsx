import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (

        <div className='Balerion'>
            <div className='Aegon'>
                <h2>TXT☠RAFA</h2>
                <form action="Sumbited">
                    <div className='datat'>
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" placeholder='Phone number, username, or email' />
                    </div>
                    <div className='datat'>
                        {/* <label htmlFor="password">Password</label> */}
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className='Sumbiteds '>
                        <button >Login</button>
                    </div>

                </form>
                <h3>OR</h3>
                <div className='face-books'>
                    <Link to="https://facebook.com"><i class="fa-brands fa-square-facebook"></i></Link>
                    <Link to="https://facebook.com"><h4>Log in with Facebook</h4></Link>
                </div>
                <div className='Forget'>
                    <Link className='dede' to={""}>Forget password?</Link>
                </div>


            </div>
            <div className="Signup-box">
                <h5>Don't have an account?</h5>
                <Link to={"/login"}>Signup</Link>

            </div>

        </div>


    )
}

export default Signup
