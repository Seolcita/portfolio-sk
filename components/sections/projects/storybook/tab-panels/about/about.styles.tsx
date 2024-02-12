import styled from 'styled-components';
import { Center } from '../../../../../common/flex.styles';

export const Container = styled(Center)`
  flex-direction: column;
`;

export const ImageContainer = styled(Center)`
  margin: 2rem 0;
`;

export const LogoText = styled.span`
  margin-left: 1.5rem;
  font-size: 3.5rem;
`;

export const ClipboardContainer = styled(Center)`
  justify-content: space-between;
  min-width: 30rem;
  margin: 2rem 0;
  padding: 0.5rem 3rem;
  background-color: #eeeeee;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;
