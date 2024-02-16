import Link from 'next/link';
import styled from 'styled-components';
import { Center } from '../../common/flex.styles';

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
    list-style: none;
    font-size: 1.5rem;
    padding: 1.5rem 3.7rem;
    margin: 0;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 1rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease;
  color: #153d4f;

  &:hover {
  }
`;

export const Logo = styled(Center)`
  font-size: 2.5rem;
`;
