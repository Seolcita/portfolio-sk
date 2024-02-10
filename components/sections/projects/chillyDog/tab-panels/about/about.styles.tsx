import styled from 'styled-components';
import { Center } from '../../../../../common/flex.styles';
import { device } from '../../../../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;

  @media ${device.md} {
    padding: 0 10rem;
  }

  @media ${device.lg} {
    padding: 0 15rem;
  }
`;

export const ImageContainer = styled(Center)`
  margin: 4rem 0;
`;

export const LogoText = styled.span`
  margin-left: 1.5rem;
  font-size: 3.5rem;
`;
