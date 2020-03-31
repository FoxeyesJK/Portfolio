import styled from 'styled-components'

import { SubColor } from '../../global.styles';

export const Link = styled.a`
    display: block;
    border: 1px solid ${SubColor};
    padding: 20px;
    color: ${SubColor};
    text-decoration: none;
    text-align: center;

    padding: ${props => props.isHeader ? "12px;" : "20px"}
`