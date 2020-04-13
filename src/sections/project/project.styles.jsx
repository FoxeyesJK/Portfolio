import styled from 'styled-components'
import { HeaderStyles } from '../../global.styles';

export const ProjectContainer = styled.div`
    width: 100%;
`


export const ProjectHeader = styled.div`
    ${HeaderStyles}
`

export const ContentsContainer = styled.div`

`

export const DetailContainer = styled.div`
    height: 90vh;
    padding: 100px;
    background-color: ${props => props.backgroundColor};
    color: #fff;

    @media screen and (max-width: 1000px) {
        padding: 50px;
    }
`

export const ImageContainer = styled.div`
    max-width: 700px;
    //height: 430px;
    margin: auto;
    background-color: white;
    padding: 40px;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1);
    &:hover {
        border: none;
    }
`

export const ImageLink = styled.a`
    &:hover {
        border: none;
    }
`

export const ProjectImage = styled.img`
    max-width: 100%;
    height: auto;

    &:hover {
        border: none;
    }
`

export const DetailContentsContainer = styled.div`
    text-align: center;
    margin: 40px 0;
`

export const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    margin: 5px;
`

export const Type = styled.div`
    font-size: 20px;
`

export const Description = styled.div`
    font-size: 16px;
    max-width: 600px;
    margin: 20px auto;
`

export const StacksContainer = styled.ul`
    display: flex;
    justify-content: center;
`

export const Stack = styled.li`
    padding: 0 10px;
    font-family: Courier New;
`

export const IconsContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
`

export const Icon = styled.li`

`

