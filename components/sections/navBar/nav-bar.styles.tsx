import Link from 'next/link';
import styled from 'styled-components';
import { Center } from '../../common/flex.styles';
import { device } from '../../../styles/Breakpoints';

export const Container = styled(Center)`
  max-width: 60rem;
  flex-wrap: wrap;
  background-color: #fff;
  height: 4rem;
`;

export const Navigation = styled.nav`
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
  }

  @media ${device.xs} {
    display: none;
  }

  @media ${device.sm} {
    display: block;
  }
`;

export const Logo = styled(Center)`
  font-size: 2.5rem;
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease;
  color: #153d4f;
  &:hover {
  }
`;

export const Navs = styled(Center)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  gap: 2rem;
  margin-left: 1rem;
`;
