import styled from 'styled-components';

import { Center } from '../../common/flex.styles';

interface SliderProps {
  $isOpen: boolean;
}

export const Container = styled(Center)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  high: 100vh;
  width: 100%;
  position: releative;
`;

export const Slider = styled(Center)<SliderProps>`
  z-index: 1000;
  background-color: white;
  border-radius: 1rem;

  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(120%)'};

  transition: transform 0.5s;
`;

export const MenuUl = styled.ul``;
