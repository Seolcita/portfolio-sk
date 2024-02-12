import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';
import { device } from 'sk-storybook';

export const Container = styled(Center)`
  flex-direction: column;
`;

export const TopicContainer = styled(Center)`
  flex-direction: column;
  align-items: start;
  margin-bottom: 5rem;
  width: 100%;
`;

export const Ul = styled.ul`
  margin: 1rem;
`;

export const Li = styled.li`
  margin: 1rem 0;
  list-style-type: circle;
`;
