import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #003B69;
      border-radius: 10px;
    }
    
  }
  body {
    background: #fff;
    font: 400 1rem 'Open Sans', sans-serif;
  }
 
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  h1 {
     font-family: 'Open Sans hebrew', sans-serif;
     font-size: 3.5rem;
     color: #383838;
     font-weight: bold;
    
  }
  h2 {
     font-family: 'Open Sans hebrew', sans-serif;
     font-size: 2rem;
     color: #383838;
     font-weight: regular;
  }
  h3 {
     font-family: 'Open Sans hebrew', sans-serif;
     font-size: 1.5rem;
     color: #383838;
     font-weight: 400;
  }
  p {
    font-size: 1.25rem;
  }
  .standard {
    background: #003B69;
    padding: 0.625rem 1.25rem;
    color: #F3F3F3;
    border-radius: 0.625rem;
    font-weight: bold;
    font-size: 1.25rem;
    border: 1px solid #003B69;

    &:hover {
        background: #00A3D7;
    }
  }
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }
`;
