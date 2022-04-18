import styled from 'styled-components'
import { Pill } from '../../styles'

export const Panel = styled.article`
  background-color: #b37a4c;
  border-left: 2px solid #000;
  height: calc(100vh - 80px);
  width: 660px;
  position: fixed;
  z-index: 2; 
  right: ${({$state}) => ($state === 'entering' || $state === "entered" ? 0 : '-660px')};
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px; 
  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vh; 
    height: calc(100vh -75px);
    bottom: ${({$state}) => ($state === 'entering' || $state === "entered" ? 0 : '-100vh')}; 
    right: unset;
    z-index: 3;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0; 
  color: #FFCD01;
  
`
// Green: #014421;
export const Em = styled.em`
  font-style: italic; 
`

export const CloseWrapper = styled(Pill)`
  display: ${({$state}) => ($state === "entered" ? 'flex' : 'none')};
  cursor: pointer;
  top: 100px;
  right: 50px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed; 
  height: 100vh;
  width: 100vw; 
  top: 0;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === "entered" ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 300ms;
`

export const URL = styled.a`
  color: #FFCD01;
  text-decoration: "none";
  &::before, &:hover {
    content: "";
    background-color: #014421;
  } 
`


