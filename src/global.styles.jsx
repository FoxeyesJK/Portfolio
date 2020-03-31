import { createGlobalStyle, css } from 'styled-components'

export const MainColor = 'rgb(0, 12, 45)'
export const SubColor = '#20de86'
export const TextColor = '#fff'

export const HeaderStyles = css`
    display: flex;
    font-size: 32px;
    font-weight: bold;
    padding: 10px;

    &::after {
        content: "";
        display: block;
        width: 280px;
        height: 1px;
        background-color: rgb(45, 57, 82);
        margin: auto 20px;
    }
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