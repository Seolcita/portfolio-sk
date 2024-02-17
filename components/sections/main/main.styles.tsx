import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MenuBox = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 1rem;
  height: 100vh;
`;

export const FloatingMenuBox = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  right: 1rem;
  transform: translateY(-38%);
  height: 100vh;
`;
