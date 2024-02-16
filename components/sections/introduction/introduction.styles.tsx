import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';
import Image from 'next/image';
import { ImageProps } from '../hero/hero.styles';

export const Container = styled(Center)`
  paddig: 10rem 0;

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
    width: 70%;
    padding: 20rem 0;
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
