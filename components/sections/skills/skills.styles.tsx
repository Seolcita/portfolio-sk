import styled from 'styled-components';

import { device } from '../../../styles/Breakpoints';
import { Center } from '../../common/flex.styles';
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
    padding: 15rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const MainSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 6rem;
  gap: 4rem;
`;

export const BirdTwo = styled(Image)<ImageProps>`
  position: absolute;
  top: -80rem;
  left: 40rem;
  width: 100%;
  height: 100%;
  transform: rotate(10deg) translateZ(50rem);
  z-index: -1;

  ${({ $movement }) =>
    $movement &&
    $movement.zAxis &&
    `transform:  translateZ(${50 + $movement.zAxis}rem) rotate(10deg);
  `};
`;

export const BirdThree = styled(Image)<ImageProps>`
  position: absolute;
  top: -10rem;
  left: 40rem;
  width: 100%;
  height: 100%;
  transform: rotate(-30deg) translateZ(-2rem);
  z-index: -1;

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.zAxis &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${
      $movement?.yAxis
    }rem) translateZ(${-2 * $movement.zAxis}rem) rotate(-0deg);
  `};
`;

export const Whale = styled(Image)<ImageProps>`
  position: absolute;
  top: -50rem;
  left: -260rem;
  width: 100%;
  height: 100%;
  transform: rotate(180deg);
  z-index: -10;

  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    $movement.rotate &&
    `transform: translateX(${$movement?.xAxis}rem) translateY(${$movement?.yAxis}rem) rotate(${$movement?.rotate}deg);
  `};
`;
