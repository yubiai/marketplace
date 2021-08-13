import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
`;

export const Container = styled.div` 
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
@media screen and (max-width: 991px) {
    padding-right: 50px;
padding-left: 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
margin-top: 15px;
background: ${({primary}) => (primary ? '#008968' : '#008968') };
white-space: nowrap;
padding: ${({big}) => (big ? '6px 12 px' : '5px 10px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '12px' : '14px')};
outline: none;
border: none;
cursor: pointer;
&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#008968' : '#008968') };    
}
@media screen and (max-width: 960px) {
  width: 100%;  
} 
`;

export default GlobalStyle