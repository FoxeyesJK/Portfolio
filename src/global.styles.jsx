import { createGlobalStyle } from 'styled-components'

export const MainColor = 'rgb(0, 12, 45)'
export const SubColor = '#20de86'
export const TextColor = '#fff'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${MainColor};
        color: ${TextColor};
    }
`