import styled from 'styled-components';
import { Center } from '../../../../../common/flex.styles';

interface ChartContainerProps {
  $isMobile?: boolean;
}

export const Container = styled(Center)`
  flex-direction: column;
`;

export const ImageContainer = styled(Center)`
  margin: 2rem 0;
`;

export const ChartContainer = styled(ImageContainer)<ChartContainerProps>`
  margin-top: -0.5rem;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '65%')};
`;

export const LogoText = styled.span`
  margin-left: 1.5rem;
  font-size: 3.5rem;
`;
