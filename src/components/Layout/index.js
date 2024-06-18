import React from 'react'
import NavbarCom from '../Navbar'
import { LayoutStyled } from './LayoutStyled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from '../../pages/shops'
import Men from '../../pages/men'
import Women from '../../pages/women'
import Kids from '../../pages/kids'
import Footer from '../Footer'

const Layout = () => {
  return (
    <LayoutStyled >
    <div>
        <NavbarCom/>

        <BrowserRouter >
        <Routes>
          <Route path='shop' element={<Shop />}/>
          <Route path='men' element={<Men />}/>
          <Route path='women' element={<Women />}/>
          <Route path='kids' element={<Kids />}/>

        </Routes>
        </BrowserRouter>
        <Footer />
    </div>
    </LayoutStyled>
  )
}

export default Layout