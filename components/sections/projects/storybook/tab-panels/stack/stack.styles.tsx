import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';
import { device } from '../../../../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;

  @media ${device.md} {
    padding: 0 5rem;
  }

  @media ${device.lg} {
    padding: 0 15rem;
  }
`;

export const StackContainer = styled(Center)`
  gap: 3.5rem;
  flex-wrap: wrap;

  @media ${device.xs} {
    padding: 2rem 0;
  }

  @media ${device.sm} {
    padding: 4rem 0;
  }
`;
