import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;
  width: 100%;

  margin: 8rem 0;

  @media ${device.xs} {
    max-width: 59rem;
    padding: 0;
  }

  @media ${device.sm} {
    max-width: 96rem;
    padding: 2rem;
  }

  @media ${device.md} {
    max-width: 150rem;
    width: 70%;
    padding: 0 0 10rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const ButtonContainer = styled(Center)`
  flex-direction: row;
  justify-content: start;
  width: 100%;
  margin-bottom: 1rem;

  @media ${device.xs} {
    margin-left: 4rem;
  }
`;
