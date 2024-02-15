import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';
import Image from 'next/image';
import { ImageProps } from '../hero/hero.styles';

export const Container = styled(Center)`
  flex-direction: column;

  position: relative;
  perspective: 500px;

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
    width: 70%;
    padding: 10rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
`;

export const Pharagraph = styled.div`
  @media ${device.md} {
    width: 100%;
  }
`;

export const PenguinOne = styled(Image)<ImageProps>`
  position: absolute;
  top: -80rem;
  left: 100rem;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg) translateZ(10rem);
  z-index: -1;

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${
      $movement?.yAxis
    }rem) translateZ(${15 + $movement?.zAxis}rem) rotate(-90deg);
  `};
`;

export const PenguinTwo = styled(Image)<ImageProps>`
  position: absolute;
  top: -50rem;
  left: 70rem;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  z-index: -1;

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${
      $movement?.yAxis
    }rem) translateZ(${-2 * $movement.zAxis}rem) rotate(-90deg);
  `};
`;
export const PenguinThree = styled(Image)<ImageProps>`
  position: absolute;
  top: -30rem;
  left: 60rem;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg) translateZ(10rem);
  z-index: -1;

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${
      $movement?.yAxis
    }rem) translateZ(${10 + $movement.zAxis}rem) rotate(-60deg);
  `};
`;
