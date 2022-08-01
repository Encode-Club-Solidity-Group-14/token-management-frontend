import React from 'react'
import LogoImg from "../../assets/logo.svg"

const Logo = () => {
  return (
   <div className="logo">
    <img src={LogoImg} alt=" trixie logo" className="logo-img" />
    <p className="logo-name">Trixie</p>
   </div>
  )
}

export default Logo