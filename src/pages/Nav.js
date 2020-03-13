import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <nav>
        <FooterStyled>
          <Link to='/Cards'>
          <img src={'../icons/home.svg'} alt="Home"/>
          </Link>
          <Link to='/Form'>
          <img src={'../icons/settings.svg'} alt="Settings"/>
          </Link>
          <Link to='Cards'> 
          <img className='imgsize'src={'../icons/icon-chrissie-new.svg'} alt="User"/>
          </Link>
          <Link to='/Greenthumb'>
          <img src={'../icons/thumb.svg'} alt="Greenthumb"/>
          </Link>
          <Link to='/Fotos'>
          <img src={'../icons/foto.svg'} alt="Fotos"/>
          </Link>
        </FooterStyled>        
      </nav>
    );
}

const FooterStyled = styled.section` 
    display: flex;
    position: fixed;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    background: #c1c1a0;
    box-shadow: 0 -5px 5px -5px #424235;

    img {
        display: inline-flex;
        align-items: bottom;
        width: 4px;   
    }

    .imgsize {
        width: 50px;
    }
`
export default Nav;
