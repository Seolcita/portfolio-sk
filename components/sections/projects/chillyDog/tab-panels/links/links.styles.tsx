import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';
import { device } from '../../../../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;
`;

export const LinksContainer = styled(Center)`
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.xs} {
    flex-direction: column;
    align-items: start;
    margin: 2rem 0;
    gap: 2rem;
  }
`;

export const LinkItem = styled(Center)`
  justify-content: start;
  margin: 2rem 0 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background-color 0.5s;

  &:hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.4);
  }

  @media ${device.xs} {
    margin: 0;
    padding: 0;
  }
`;
