import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';
import Image from 'next/image';
import { ImageProps } from '../hero/hero.styles';

export const Container = styled(Center)`
  paddig: 10rem 0;

  @media ${device.xs} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 59rem;
    padding: 5rem 4rem;
  }

  @media ${device.sm} {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 96rem;
    padding: 8rem;
  }

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 150rem;
    width: 70%;
    padding: 20rem 0 10rem;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media ${device.md} {
    padding-left: 6rem;
  }
`;

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Fredoka', sans-serif;
  padding: 1.5rem 3rem;
  margin-top: 3rem;
  color: #153d4f;
  letter-spacing: 3px;
  border: 0.4rem solid #153d4f;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  width: 15rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    div {
      top: 0;
    }
  }
`;

export const Wave = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: calc(100% + 22px);
  background-color: #153d4f;
  transition: all 1s;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: -2.2rem;
    left: 0;
    width: 100%;
    height: 2.2rem;
    background-image: url('/assets/wave.png');
    animation: wavy 0.5s linear infinite;
  }

  @keyframes wavy {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 118px;
    }
  }
`;
