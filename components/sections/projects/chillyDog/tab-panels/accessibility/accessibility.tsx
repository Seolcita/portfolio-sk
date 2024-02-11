import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './accessibility.styles';
import { lilita } from '../../../../../../styles/Fonts';
import {
  DeviceType,
  useWindowSize,
} from '../../../../../../hooks/use-window-resize';

export const AccessibilityChillyDog = (): ReactElement => {
  const { deviceType } = useWindowSize();

  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <>
      <S.TitleContainer>
        <Image
          src='/assets/logo.svg'
          alt='Logo'
          width={50}
          height={50}
          style={{ border: '0.2rem solid white', borderRadius: '50%' }}
        />
        <S.LogoText className={lilita.className}>Accessibility</S.LogoText>
      </S.TitleContainer>
      <S.Container>
        {/* Main Page */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Main Page
          </Typography>
          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/I17P2c4ZJL8?si=hdU8WEkyO4UNb7Mt'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* Create First Dog Profile */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Creating Dog Profile
          </Typography>
          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/2_-2dp9HnBY?si=afiMyRT4rX-xNHF9'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* Alert */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Alert
          </Typography>
          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/cqOxSId0HJQ?si=FYlO2hB-Tu6xaOjY'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* Toast Message */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Toast Message
          </Typography>

          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/gJTAGHjtHcA?si=Ab4UitTRxBHXZ66u'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* User Profile */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            User Profile
          </Typography>

          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/BwTI423AH9g?si=Q9BuZB3Pb15nFJPz'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* Dog Profile */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Dog Profile
          </Typography>

          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/biKcidM-Pxs?si=dcm286HW0X1ZYFbk'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* Location */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Location
          </Typography>

          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/nGZh39gCHjk?si=Pi8kOkA2uBJgpV7v'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>

        {/* Logout */}
        <S.VideoContainer>
          <Typography
            variant='headingXS'
            fontWeight='bold'
            margin={['xl', 'none', 'lg']}
          >
            Logout
          </Typography>

          <iframe
            width={isMobile ? '360' : '560'}
            height={isMobile ? '200' : '315'}
            src='https://www.youtube.com/embed/Seri0l0ogJU?si=TsN_R3XW3rm2WOLQ?rel=0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </S.VideoContainer>
      </S.Container>
    </>
  );
};
