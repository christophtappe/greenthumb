import React from 'react'
import styled from 'styled-components'
import blattIcon from '../icons/014-tropisch-color.svg'


function Header() {
    return (
        <HeaderStyled>
<h1>GreenThumb</h1>
<img src={blattIcon} alt=" "/>
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
    font-style: italic;
    padding-right: 8px;

  }

  img {
    display: inline-flex;
    width: 35px;
    color: #d4d4c9;
    

}
  `

export default Header;
 