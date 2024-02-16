import styled, { keyframes } from 'styled-components';

import { Center } from '../../common/flex.styles';
import { MoveImageProps } from './hero';
import Image from 'next/image';

export const Container = styled(Center)`
  background-color: white;
  width: 100%;
  height: 100vh;

  position: relative;
  perspective: 500px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export interface ImageProps {
  $movement?: MoveImageProps;
}

export const TitleBox = styled(Center)`
  position: absolute;
  top: 40%;
  left: 15%;

  flex-direction: column;
  margin-bottom: -10rem;
`;

export const Title = styled.h1`
  z-index: 5;
  margin: 1rem;
  font-size: 8rem;
  font-weight: 700;
  color: #153d4f;
`;

export const Background = styled(Image)<ImageProps>``;

export const Whale = styled(Image)<ImageProps>`
  margin-top: ${({ $movement }) => $movement?.top}rem;
  margin-left: -${({ $movement }) => $movement?.left}rem;
  transform: rotate(${({ $movement }) => $movement?.rotate}deg)
    translateZ(${({ $movement }) => $movement?.zAxis}rem) scale(0.8);
  z-index: 10;
`;

export const BirdOne = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    `transform: translate(${$movement.xAxis}rem, ${$movement.yAxis}rem);
  `}
`;
export const BirdTwo = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    `transform: translate(${$movement.xAxis}rem, ${$movement.yAxis}rem);
  `}
`;
export const BirdThree = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    `transform: translate(${$movement.xAxis}rem, ${$movement.yAxis}rem);
  `}
`;
export const BirdsSmall = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    `transform: translate(${$movement.xAxis}rem, ${$movement.yAxis}rem);
  `}
`;
export const BirdsLarge = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.xAxis &&
    $movement.yAxis &&
    `transform: translate(${$movement.xAxis}rem, ${$movement.yAxis}rem);
  `}
`;
export const PenguinOne = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.zAxis &&
    `transform: translateZ(${$movement.zAxis}rem);
  `}
`;
export const PenguinTwo = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.zAxis &&
    `transform: translateZ(${$movement.zAxis}rem);
  `}
`;
export const PenguinThree = styled(Image)<ImageProps>`
  ${({ $movement }) =>
    $movement &&
    $movement.zAxis &&
    `transform: translateZ(${$movement.zAxis}rem);
  `}
`;
