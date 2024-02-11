import styled from 'styled-components';

import { Center } from '../../../../../common/flex.styles';

export const Container = styled(Center)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TitleContainer = styled(Center)`
  margin: 4rem 0;
`;

export const LogoText = styled.span`
  margin-left: 1.5rem;
  font-size: 3.5rem;
`;

export const VideoContainer = styled(Center)`
  flex-direction: column;
`;

export const IFrameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  padding-bottom: 55.156%;
`;

export const IFrame = styled.iframe`
  overflow: hidden;
  border: none;
`;
