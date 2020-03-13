import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <nav>
        <FooterStyled>
          <Link to='/Cards'>
          <img src={'./icons/home.svg'} alt="Home"/>
          </Link>
          <Link to='/Cards'>
          <img src={'./icons/settings.svg'} alt="Settings"/>
          </Link>
          <Link to='Cards'> 
          <img src={'./icons/user.svg'} alt="User"/>
          </Link>
          <Link to='/Greenthumb'>
          <img src={'./icons/thumb.svg'} alt="Greenthumb"/>
          </Link>
          <img src={'./icons/foto.svg'} alt="Home"/>
        </FooterStyled>        
      </nav>
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

export default Nav;
