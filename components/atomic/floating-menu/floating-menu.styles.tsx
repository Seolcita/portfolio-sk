import styled from 'styled-components';

import { Center } from '../../common/flex.styles';

export const Container = styled(Center)`
  justify-content: center;
  align-items: center;
  high: 100vh;
`;

export const MenuUl = styled.ul`
  flex-direction: column;

  padding: 2rem 0;
  margin: 0;
  display: flex;
  gap: 2rem;
`;

export const MenuList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 6rem;
  height: 6rem;
  margin: 0 1rem;
  border: 0.2rem solid #0a3d62;
  border-radius: 50%;
  transition: all 0.5s;
  list-style-type: none;

  a {
    z-index: 1000;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a3d62;
    border-radius: 50%;
    transition: all 0.5s;
    opacity: 1;
    transform: scale(0.8);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
    border: 0.2rem dashed #2e86de;
    transition: all 0.5s;
    opacity: 0;
    box-sizing: border-box;
  }

  &:hover:after {
    opacity: 1;
    animation: rotating 10s linear infinite;
  }

  @keyframes rotating {
    0% {
      transform: scale(0.92) rotate(0deg);
    }
    100% {
      transform: scale(0.92) rotate(360deg);
    }
  }
`;
