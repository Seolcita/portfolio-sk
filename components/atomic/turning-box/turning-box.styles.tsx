import styled from 'styled-components';
import { Center } from '../../common/flex.styles';

interface ContainerProps {
  $borderRadius?: number;
}

interface FrontProps {
  $bgImageUrl: string;
}

export const Base = styled.div`
  width: 12rem;
  height: 12rem;
  background-size: cover;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  background-position: center;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  text-align: center;
  color: white;
  font-size: 1.5rem;
`;

export const Front = styled(Base)<FrontProps>`
  background-image: url(${({ $bgImageUrl }) => $bgImageUrl});
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotateY(0deg);
  border: 0.75rem solid #fff;
`;

export const Back = styled(Base)<FrontProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(180deg);

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: 0.95;
    border-radius: 50%;
    backface-visibility: hidden;
    background: linear-gradient(-45deg, #e2e4e4 0%, #116d82 100%);
  }
`;

export const Inner = styled.div`
  transform: translateY(-50%) translateZ(6rem);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  outline: 1px solid transparent;
  perspective: inherit;
  z-index: 2;
`;

export const Container = styled(Center)<ContainerProps>`
  border-radius: ${({ $borderRadius }) => `${$borderRadius}rem`};
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    ${Front} {
      transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
      transform: rotateY(-180deg);
      transform-style: preserve-3d;
    }
  }

  &:hover {
    ${Back} {
      transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
      transform: rotateY(0deg);
      transform-style: preserve-3d;
    }
  }
`;
