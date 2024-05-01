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
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Main Page
        </Typography>
        <S.Video src='/assets/videos/main.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* Alert */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Alert
        </Typography>
        <S.Video src='/assets/videos/alert.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* Create First Dog Profile */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Creating Dog Profile
        </Typography>
        <S.Video src='/assets/videos/createDogProfile.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* Dog Profile */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'lg']}
        >
          Dog Profile
        </Typography>

        <S.Video src='/assets/videos/dogProfile.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* User Profile */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          User Profile
        </Typography>

        <S.Video src='/assets/videos/userProfile.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* Toast Message */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          Toast Message
        </Typography>

        <S.Video src='/assets/videos/toast.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* Location */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          Location
        </Typography>

        <S.Video src='/assets/videos/location.mp4' controls></S.Video>
      </S.VideoContainer>

      {/* Logout */}
      <S.VideoContainer $isMobile={isMobile}>
        <Typography
          variant={isMobile ? 'headingXS' : 'headingS'}
          fontWeight='bold'
          margin={['xl', 'none', 'none']}
        >
          Logout
        </Typography>

        <S.Video src='/assets/videos/logout.mp4' controls></S.Video>
      </S.VideoContainer>
    </S.Container>
  );
};
