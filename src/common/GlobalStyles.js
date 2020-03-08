import { createGlobalStyle } from 'styled-components/macro'
export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    display: grid;
    grid-template-rows: 50px auto 50px;
    margin: 0px 0px 0px;
    background: #d4d4c9;
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    
    height: 100vh;
  }
  
  .App {
    height: 2000px;

}
`