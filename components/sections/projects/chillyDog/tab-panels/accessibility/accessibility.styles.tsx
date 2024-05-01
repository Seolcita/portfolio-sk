import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';

interface VideoContainerProps {
  $isMobile: boolean;
}

export const Container = styled(Center)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const TitleContainer = styled(Center)`
  margin: 4rem 0;
`;

export const LogoText = styled.span`
  margin-left: 1.5rem;
  font-size: 3.5rem;
`;

export const VideoContainer = styled(Center)<VideoContainerProps>`
  flex-direction: column;
  width: ${({ $isMobile }) => ($isMobile ? '320px' : '380px')};
  height: ${({ $isMobile }) => ($isMobile ? '260px' : '300px')};
`;

export const Video = styled.video`
  overflow: hidden;
  border: none;
  width: 100%;
  height: 100%;
`;
