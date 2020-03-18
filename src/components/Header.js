import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderStyled>
          
        
          <img src={'../icons/Logo_Greenthumb_Rot.png'} alt='' />
       
        </HeaderStyled>
    );
}



const HeaderStyled = styled.section` 
    display: flex;
    height: 80px;
    
    background: #5e918e;
    box-shadow: 0 5px 5px -5px #424235;

    img {
    width: 200px;
    
    margin: auto;  

  }

   

  h1 {
    color: #d4d4c9;
    font-size: 30px;
    font-family: 'Acme';
    padding-right: 5px;
  }

  span {
    font-size: 18px;
  }


`

export default Header;
 