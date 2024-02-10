import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  background-color: pink;

  flex-direction: column;
  width: 100%;

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
    padding: 4rem;
  }
`;
