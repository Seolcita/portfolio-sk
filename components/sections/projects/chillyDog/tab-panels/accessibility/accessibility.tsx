import { ReactElement } from 'react';

import {
  DeviceType,
  useWindowSize,
} from '../../../../../../hooks/use-window-resize';
import * as S from './accessibility.styles';
import Typography from '../../../../../atomic/Typography/Typography';

export const AccessibilityChillyDog = (): ReactElement => {
  const { deviceType } = useWindowSize();
  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <S.Container>
      {/* Main Page */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Main Page
        </Typography>
        <S.IFrame
          allow='fullscreen'
          src='https://streamable.com/e/i3z8h0?loop=0'
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
        ></S.IFrame>
      </S.VideoContainer>

      {/* Alert */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Alert
        </Typography>
        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/7tm6rm?loop=0'
        ></S.IFrame>
      </S.VideoContainer>

      {/* Create First Dog Profile */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Creating Dog Profile
        </Typography>
        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/6sbtpr?loop=0'
        ></S.IFrame>
      </S.VideoContainer>

      {/* Dog Profile */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Dog Profile
        </Typography>

        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/zam4cd?loop=0'
        ></S.IFrame>
      </S.VideoContainer>

      {/* User Profile */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          User Profile
        </Typography>

        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/6rys5l?loop=0'
        ></S.IFrame>
      </S.VideoContainer>

      {/* Toast Message */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          Toast Message
        </Typography>

        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/oep9bs?loop=0'
        ></S.IFrame>
      </S.VideoContainer>

      {/* Location */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          Location
        </Typography>

        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/v0dkt4?loop=0'
        ></S.IFrame>
      </S.VideoContainer>

      {/* Logout */}
      <S.VideoContainer>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          Logout
        </Typography>

        <S.IFrame
          width={isMobile ? '360' : '560'}
          height={isMobile ? '200' : '315'}
          src='https://streamable.com/e/b5oczg?loop=0'
        ></S.IFrame>
      </S.VideoContainer>
    </S.Container>
  );
};
