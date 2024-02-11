import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';
import { device } from '../../../../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;
  padding: 4rem 0;

  @media ${device.md} {
    padding: 0 10rem;
  }

  @media ${device.lg} {
    padding: 0 15rem;
  }
`;

export const StackContainer = styled(Center)`
  gap: 3rem;
  flex-wrap: wrap;
  padding: 6rem 0;

  @media ${device.xs} {
    padding: 0;
  }

  @media ${device.sm} {
    padding: 1rem 0;
  }
`;
