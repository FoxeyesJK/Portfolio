import styled from 'styled-components'
import { HeaderStyles } from '../../global.styles';
import imageSportify from '../../assets/project-sportify.png'

export const ProjectContainer = styled.div`
    width: 100%;
`

export const ProjectHeader = styled.div`
    ${HeaderStyles}
`

export const ContentsContainer = styled.div`

`

export const ImageContainer = styled.div`
    width: 500px;
    height: 300px;
`

export const ProjectImage = styled.div`
    background-image: url(${imageSportify});
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    height: 100%;
`

export const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid white;
`

export const DetailContentsContainer = styled.div`
    text-align: right;
`

export const Type = styled.div`
    font-size: 13px;
    margin: 10px 0;
`

export const Title = styled.div`
    font-size: 28px;
    margin: 20px 0;
`

export const Description = styled.div`
    font-size: 18px;
    max-width: 400px;
`

export const StacksContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
`

export const Stack = styled.li`
    padding: 10px;
`

export const IconsContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
`

export const Icon = styled.li`

`