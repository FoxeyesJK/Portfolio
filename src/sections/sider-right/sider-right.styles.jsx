import styled from 'styled-components'

export const SiderRightContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        background-color: rgb(168, 178, 209);
        margin: 0 auto;
    }
`

export const IconContainer = styled.ul`

`

export const Link = styled.a`
    writing-mode: vertical-rl;
    padding: 10px;
    margin: 20px auto;
`


