import styled from 'styled-components';

// const headerHight = 4; // temporary value
// const height = `calc(100vh - ${headerHight}rem)`;

export const Center = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled(Center)`
  width: 100%;
  height: 100vh;
`;
