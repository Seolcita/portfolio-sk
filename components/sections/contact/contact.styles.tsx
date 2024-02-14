import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  background-color: grey;

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

export const Contents = styled(Center)`
  width: 100%;
  height: 40rem;
  padding: 3rem;

  @media ${device.xs} {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const LeftContainer = styled(Center)`
  height: 100%;
  width: 100%;
`;

export const RightContainer = styled(Center)`
  height: 100%;
  width: 100%;
`;

export const Card = styled(Center)`
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;

  padding: 2rem 3rem;

  height: 100%;
  width: 100%;
`;

export const Item = styled(Center)`
  gap: 1rem;
`;

export const IconsContainer = styled(Center)`
  flex-direction: row;
  gap: 1rem;
  // margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
