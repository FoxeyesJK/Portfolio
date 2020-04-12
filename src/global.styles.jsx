import { createGlobalStyle, css } from 'styled-components'

export const MainColor = '#fff'
export const SubColor = 'rgb(66,195,226)'//'#20de86'
export const SubDarkerColor = 'rgb(0,165,199)'//'#1fa5c7'
export const TextColor = 'rgb(58,72,74)'
export const MintColor = 'rgb(66,195,226)'//'rgb(100,255,218)'
export const RedColor = '#eb4c59'
export const GreyColor = '#c8c8c8'

export const HeaderStyles = css`
    text-align: center;
    font-size: 32px;
    color: #1fa5c7;
    font-weight: bold;
    padding: 10px;
`

export const SubHeaderStyles = css`
    text-align: center;
    font-size: 20px;
    color: ${SubColor};
    padding: 10px;
`

export const ListStyles = css`
    display: list-item;
    padding-left: 30px;
    &::before {
        content: "▹";
        position: absolute;
        color: ${SubColor};
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
        color: ${SubColor};
        text-decoration: none;
    }

    a:hover {
        color: ${SubDarkerColor};
        border-bottom: 3px solid ${RedColor};
        transition: 0.3s;
    }
`

