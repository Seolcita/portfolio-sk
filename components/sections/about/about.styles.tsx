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
  right: -60rem;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg) scale(0.1);

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${
      $movement?.yAxis
    }rem) translateZ(${15 + $movement?.zAxis}rem) rotate(-90deg) scale(0.1);
`};
`;

export const PenguinTwo = styled(Image)<ImageProps>`
  position: absolute;
  top: -80rem;
  right: -90rem;
  width: 100%;
  height: 100%;
  transform: rotate(-80deg) scale(0.1);

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${$movement?.yAxis}rem) translateZ(${$movement.zAxis}rem) rotate(-80deg) scale(0.1);
`};
`;

export const PenguinThree = styled(Image)<ImageProps>`
  position: absolute;
  top: -100rem;
  right: -80rem;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg) scale(0.1);
  z-index: -1;

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${
      $movement?.yAxis
    }rem) translateZ(${-3 * $movement.zAxis}rem) rotate(-60deg) scale(0.1);
`};
`;
