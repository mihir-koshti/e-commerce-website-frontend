import React from 'react'
import { NewsLettersStyled } from './NewsLettersStyled'
import { Button, Container } from 'react-bootstrap'

const NewsLetters = () => {
  return (
    <NewsLettersStyled>
        <div className='newsLetter'>
        <Container >

            <h1 className=''>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our  newletter and stay updated</p>
            <div className='Email-input'>
                <input type='email' placeholder='Enter Your Email Id'/>
                <Button className='subcribe-btn'>Subscribe</Button>
            </div>
        </Container>
        </div>
    </NewsLettersStyled>
  )
}

export default NewsLetters