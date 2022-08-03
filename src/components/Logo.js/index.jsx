import React from 'react'
import LogoImg from "../../assets/logo.svg"
import {NavLogoLink } from '../Navigation/styles'

const Logo = () => {
  return (
   <div className="logo">
     <NavLogoLink to="/">   
    <img src={LogoImg} alt=" trixie logo" className="logo-img" />
    <p className="logo-name">Trixie</p>
    </NavLogoLink>
   </div>
  )
}

export default Logo