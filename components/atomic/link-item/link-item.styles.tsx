import styled from 'styled-components';
import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

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

  @media ${device.xs} {
    margin: 0;
    padding: 0;
  }
`;
