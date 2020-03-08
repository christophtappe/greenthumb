import React from 'react'
import styled from 'styled-components'




function Footer() {
return (
    <FooterStyled>
        <img src={require('../icons/005-barn.svg')} alt="Home"/>
        <img src={require('../icons/004-seed.svg')} alt="Settings"/>
        <img src={require('../icons/002-farm-1.svg')} alt="User"/>
        <img src={require('../icons/003-mogen-1.svg')} alt="Home"/>
        <img src={require('../icons/006-foto-s.svg')} alt="Home"/>
    </FooterStyled>
);
}

const FooterStyled = styled.section` 
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding-left: 16px;
  padding-right: 16px;
  background: #c1c1a0;
box-shadow: 0 -5px 5px -5px #424235;


img {
    display: inline-flex;
    width: 38px;
    
    
}

`

export default Footer;