import styled from 'styled-components';

import { Center, Wrap } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  @media ${device.xs} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 59rem;
    padding: 5rem 4rem;
  }

  @media ${device.sm} {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 96rem;
    padding: 8rem;
  }

  @media ${device.md} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 150rem;
    width: 75%;
    padding: 10rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media ${device.md} {
    padding-left: 6rem;
  }
`;
