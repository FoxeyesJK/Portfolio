import { createGlobalStyle, css } from 'styled-components'

export const MainColor = '#fff'
export const SubColor = 'rgb(66,195,226)'//'#20de86'
export const TextColor = 'rgb(58,72,74)'

export const HeaderStyles = css`
    text-align: center;
    font-size: 32px;
    color: #1fa5c7;
    font-weight: bold;
    padding: 10px;

    // &::after {
    //     content: "";
    //     display: block;
    //     width: 280px;
    //     height: 1px;
    //     background-color: rgb(45, 57, 82);
    //     margin: auto 20px;
    // }
`

export const ListStyles = css`
    display: list-item;
    position: relative;
    padding-left: 30px;
    &::before {
        content: "▹";
        position: absolute;
        color: white;
        left: 0px;
    }
`

export const SectionStyles = css`
    max-width: 1000px;
    margin: 0px auto;
    padding: 150px 0;
`


export const FadeInStyles = css`
    animation: fadeIn ease 1s;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
`


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${MainColor};
        color: ${TextColor};
    }

    a {
        color: ${TextColor};
        text-decoration: none;
    }
`

