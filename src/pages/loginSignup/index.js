import React from 'react'
import { LoginSignupStyled } from './LoginSignupStyled'
import { Button, Container } from 'react-bootstrap'

const LoginSignup = () => {
  return (
    <LoginSignupStyled>
        <div className='loginSignUp'>
            <Container className='LoginSignUp-Container'>
                <h1>Sign Up</h1>
                <div className='loginSignUp-feilds'>
                    <div className='my-4'>
                    <input type='text' placeholder='Your Name'/>
                    </div>
                    <div className='my-4'>
                    <input type='email' placeholder='Email Address' />
                    </div>
                    <div className='my-4'>    
                    <input type='password' placeholder='Password'/>
                    </div>
                </div>
                <Button className='LoginSignUp-Container-btn'>Continue</Button>
                <p className='loginText fs-24 fw-500'>Already have a account? <span> Login here</span></p>
                <div className='loginTermsClass d-flex'>
                    <input type='checkbox' className='me-2' name='' id=''/>
                    <p className='m-0'>By Continuing, i agree to the terms of use & privacy policy. </p>
                </div>
            </Container>
        </div>
    </LoginSignupStyled>
  )
}

export default LoginSignup