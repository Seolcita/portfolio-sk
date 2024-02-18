import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;

  @media ${device.xs} {
    align-items: center;
    justify-content: center;
    max-width: 59rem;
    padding: 5rem 4rem;
  }

  @media ${device.sm} {
    align-items: start;
    justify-content: center;
    max-width: 96rem;
    padding: 8rem;
  }

  @media ${device.md} {
    align-items: center;
    justify-content: center;
    max-width: 150rem;
    width: 50%;
    padding: 0 0 10rem 0;
  }

  @media ${device.lg} {
    width: 40%;
  }
`;

export const Card = styled(Center)`
  flex-direction: column;
  margin: 4rem 0;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
`;

export const Item = styled(Center)`
  gap: 1rem;
`;

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem 0;

  background: ${({ disabled }) => (disabled ? 'grey' : '#153d4f')};
  color: #f1f1f1;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.3s;

  overflow: hidden;

  &:before {
    ${({ disabled }) => disabled && 'opacity:0'}
    content: 'Thank you!';
    color: white;
    background-color: #f44336;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform: translateY(-100%);
    transition: all 0.5s;
  }

  &:hover:before {
    transform: translateY(0);
  }
`;

export const IconsContainer = styled(Center)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 8rem;
  background: #f1f1f1;
  margin: 10px;
  border-radius: 30%;
  color: #10ac84;
  box-shadow: 0 0.5rem 1.5rem -0.5rem #00000070;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: #0a3d62;
    left: -110%;
    top: 90%;
    transform: rotate(45deg);
    z-index: 1000;
  }

  &:hover::before {
    animation: animation 0.7s 1 forwards;
  }

  @keyframes animation {
    0% {
      left: -110%;
      top: 90%;
    }
    50% {
      left: 15%;
      top: -30%;
    }
    100% {
      top: -10%;
      left: -10%;
    }
  }
`;
