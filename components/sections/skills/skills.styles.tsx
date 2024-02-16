import styled from 'styled-components';

import { device } from '../../../styles/Breakpoints';
import { Center } from '../../common/flex.styles';

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
    padding: 15rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const MainSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 6rem;
  gap: 4rem;
`;
