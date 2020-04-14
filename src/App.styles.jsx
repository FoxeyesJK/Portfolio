import styled from 'styled-components';

import { MainColor } from './global.styles';

export const AppContainer = styled.div`
  background-color: ${MainColor}
  padding: 200px 150px;
`;

export const BodyContainer = styled.div`
  width: 100%;
  //max-width: 1600px;
  //min-height: 100vh;
  //padding: 0 200px;
  //margin: 0 auto;
  display: block;

`;

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props => props.isScrolled ? '100px' : '140px'};
  transition: 0.3s;
`;

export const SiderLeftContainer = styled.div`
  position: fixed;
  width: 40px;
  height: 180px;
  left: 40px;
  bottom: 0;
  right: auto;
  z-index: 1;
`;

export const SiderRightContainer = styled.div`
  position: fixed;
  width: 40px;
  height: 280px;
  left: auto;
  bottom: 0;
  right: 40px;
  z-index: 1;
`;

export const SectionContainer = styled.section`
`;

export const FooterContainer = styled.footer`

`;

export const Title = styled.title`
  
`;

