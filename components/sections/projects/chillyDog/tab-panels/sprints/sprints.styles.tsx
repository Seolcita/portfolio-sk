import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';
import { device } from '../../../../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;

  @media ${device.md} {
    padding: 0 10rem;
  }

  @media ${device.lg} {
    padding: 1rem 15rem;
  }
`;

export const ImageContainer = styled(Center)`
  width: 100%;
  margin: 4rem 0 8rem;

  @media ${device.xs} {
    margin: 2rem 0;
  }

  @media ${device.md} {
    width: 80%;
    margin: 4rem 0;
  }
`;