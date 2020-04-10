import styled from 'styled-components'
import { SectionStyles, HeaderStyles } from '../../global.styles';
import imageSportify from '../../assets/project-sportify.png'

export const ProjectContainer = styled.div`
    width; 100%;

`


export const ProjectHeader = styled.div`
    ${HeaderStyles}
`

export const ContentsContainer = styled.div`

`

export const DetailContainer = styled.div`
    height: 100vh;
    padding: 100px;
    background-color: ${props => props.backgroundColor};
    color: #fff;
`

export const ImageContainer = styled.div`
    width: 800px;
    height: 430px;
    margin: auto;
    background-color: white;
    padding: 40px;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1);
`

export const ProjectImage = styled.div`
    background-image: url(${imageSportify});
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    height: 100%;
`

export const DetailContentsContainer = styled.div`
    text-align: center;
    margin: 40px 0;
`

export const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    font-family: Roboto;
    //text-transform: uppercase;
    margin: 5px;
`

export const Type = styled.div`
    font-size: 20px;
    font-family: Roboto;
`

export const Description = styled.div`
    font-size: 20px;
    max-width: 600px;
    margin: 20px auto;
    font-family: Roboto;
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

