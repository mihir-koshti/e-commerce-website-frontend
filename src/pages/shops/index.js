import React from 'react'
import Hero from '../../components/Hero'
import { Container } from 'react-bootstrap'
import Popular from '../../components/Popular'
import Offers from '../../components/Offers'
import NewCollections from '../../components/NewCollections'
import NewsLetters from '../../components/NewsLetters'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetters />
    </div>
  )
}

export default Shop