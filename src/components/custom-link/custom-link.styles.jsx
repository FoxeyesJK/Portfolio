import styled from 'styled-components'

import { SubColor } from '../../global.styles';

export const Link = styled.a`
    display: block;
    height: 100%;
    border: 1px solid ${SubColor};
    padding: 20px;
    color: ${SubColor};
    text-decoration: none;
    text-align: center;
    border-radius: 3px;

    padding: ${props => props.isHeader ? "10px 12px;" : "20px"}
`