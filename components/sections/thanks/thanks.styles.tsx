import styled from 'styled-components';
import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  widht: 100%;
  height: 100vh;
  background-color: #082031;
  padding: 0 4rem;

  @media ${device.xs} {
    align-items: center;
    padding: 0 2rem;
  }
`;

export const Contents = styled(Center)`
  flex-direction: row;
  padding: 2rem;

  @media ${device.xs} {
    flex-direction: column;
  }
`;

export const TextContainer = styled(Center)`
  flex-direction: column;
  align-items: start;

  @media ${device.xs} {
    align-items: center;
  }
`;
