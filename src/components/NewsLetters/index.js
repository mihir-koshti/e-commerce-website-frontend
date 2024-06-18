import React from 'react'
import { NewsLettersStyled } from './NewsLettersStyled'
import { Button, Container } from 'react-bootstrap'

const NewsLetters = () => {
  return (
    <NewsLettersStyled>
        <Container >

        <div className='newsLetter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our  newletter and stay updated</p>
            <div className='Email-input'>
                <input type='email' placeholder='Enter Your Email Id'/>
                <Button className='subcribe-btn'>Subscribe</Button>
            </div>
        </div>
        </Container>
    </NewsLettersStyled>
  )
}

export default NewsLetters