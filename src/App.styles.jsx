import styled from 'styled-components';

import { MainColor } from './global.styles';

export const AppContainer = styled.div`
  background-color: ${MainColor}
  padding: 200px 150px;
`;

export const BodyContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 200px;
  margin: 0 auto;
  display: block;

`;

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props => props.isScrolled ? '70px' : '100px'};
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
  display: flex;
  max-width: 1000px;
  margin: 0px auto;
  padding: 150px 0;

  &:first-child {
    min-height: 100vh;
  }

  // width: 100%;
  // height: 500px;
  // z-index:0; 
  // -webkit-transform: translateZ( 0 );
  // transform: translateZ( 0 );
  // -webkit-transition: -webkit-transform 0.6s ease-in-out;
  // transition: transform 0.6s ease-in-out;
  // -webkit-backface-visibility: hidden;
  // backface-visibility: hidden;
`;

export const FooterContainer = styled.footer`

`;
