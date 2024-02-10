import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;

  @media ${device.xs} {
    align-items: center;
    justify-content: center;
    max-width: 59rem;
    padding: 5rem 4rem;
  }

  @media ${device.sm} {
    align-items: start;
    justify-content: center;
    max-width: 96rem;
    padding: 8rem;
  }

  @media ${device.md} {
    align-items: center;
    justify-content: center;
    max-width: 150rem;
    width: 70%;
    padding: 10rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
`;

export const Pharagraph = styled.div`
  @media ${device.md} {
    width: 100%;
  }
`;
