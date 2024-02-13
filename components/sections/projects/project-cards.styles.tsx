import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const ProjectCardsContainer = styled(Center)`
  flex-direction: row;
  width: 100%;
  gap: 5rem;

  margin: 8rem;

  @media ${device.xs} {
    flex-direction: column;
  }
`;

export const CardContainer = styled(Center)`
  flex-direction: row;
  width: 47.5%;

  @media ${device.xs} {
    width: 90%;
  }
`;

export const LinksContainer = styled(Center)`
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const LinkItem = styled(Center)`
  justify-content: start;
  margin: 2rem 0 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background-color 0.5s;

  &:hover {
    background-color: #c7c8cc;
  }

  &:active {
    background-color: #b4b4b8;
  }
`;

export const TitleContainer = styled(Center)`
  margin: 1rem 0 1.5rem;
`;

export const CardContents = styled(Center)`
  flex-direction: column;
`;
