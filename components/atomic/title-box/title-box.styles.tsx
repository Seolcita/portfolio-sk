import styled from 'styled-components';

import { Center } from '../../common/flex.styles';

interface ContainerProps {
  $bgColor?: string;
}

export const Container = styled(Center)<ContainerProps>`
  width: 100%;
  padding: 1rem;
  background-color: ${({ $bgColor }) => $bgColor || 'black'};
  justify-content: start;
  border-radius: 0.5rem;
`;

export const ImageContainer = styled(Center)`
  margin-right: 1.5rem;
`;
