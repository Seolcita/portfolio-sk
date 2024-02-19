import styled from 'styled-components';

import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  flex-direction: column;
  width: 100%;

  margin: 8rem 0;

  @media ${device.xs} {
    max-width: 59rem;
    padding: 0 2rem;
  }

  @media ${device.sm} {
    max-width: 96rem;
    padding: 2rem;
  }

  @media ${device.md} {
    max-width: 150rem;
    width: 70%;
    padding: 0 0 10rem 0;
  }

  @media ${device.lg} {
    width: 65%;
  }
`;

export const ButtonContainer = styled(Center)`
  flex-direction: row;
  justify-content: start;
  width: 100%;
  margin-bottom: 2rem;

  @media ${device.xs} {
    margin-left: 4rem;
  }
`;

export const CompleteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  background-color: #153d4f;
  color: white;
  width: 23rem;

  padding: 1rem 2rem;
  border: none;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    top: -0.5rem;
    left: -0.5rem;
    border-top: 0.2rem solid #153d4f;
    border-left: 0.2rem solid #153d4f;
    transition: all 0.25s;
  }

  &:after {
    content: '';
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    bottom: -0.5rem;
    right: -0.5rem;
    border-bottom: 0.2rem solid #153d4f;
    border-right: 0.2rem solid #153d4f;
    transition: all 0.25s;
  }

  &:hover:before,
  &:hover:after,
  &:focus:before,
  &:focus:after {
    height: 100%;
    width: 100%;
  }
`;
