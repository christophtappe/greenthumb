import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderStyled>
          <h1>GreenThumb</h1>
          <img src={'./icons/014-tropisch-color.svg'} alt=" "/>
        </HeaderStyled>
    );
}



const HeaderStyled = styled.section` 
    display: flex;
    justify-content: center;
    background: #5e918e;
    box-shadow: 0 5px 5px -5px #424235;

  h1 {
    color: #d4d4c9;
    font-size: 30px;
    font-family: 'Acme';
    padding-right: 5px;
  }

  span {
    font-size: 18px;
  }

  img {
    display: inline-flex;
    width: 35px;
    color: #d4d4c9;  
  }
`

export default Header;
 