import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterStyled>
            <img src={'./icons/home.svg'} alt="Home"/>
            <img src={'./icons/settings.svg'} alt="Settings"/>
            <img src={'./icons/user.svg'} alt="User"/>
            <img src={'./icons/thumb.svg'} alt="Greenthumb"/>
            <img src={'./icons/foto.svg'} alt="Foto"/>
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