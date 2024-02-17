import { ReactElement } from 'react';
import Image from 'next/image';

import * as S from './usecase.styles';
import Typography from '../../../../../atomic/Typography/Typography';
import {
  DeviceType,
  useWindowSize,
} from '../../../../../../hooks/use-window-resize';

export const UseCaseChillyDog = (): ReactElement => {
  const { deviceType } = useWindowSize();
  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <S.Container>
      {/* Create First Dog Profile */}
      <Typography
        variant={isMobile ? 'headingXS' : 'headingS'}
        fontWeight='bold'
        margin={['lg', 'none']}
      >
        Creating First Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/createDP.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Resume Creating Dog Profile */}
      <Typography
        variant={isMobile ? 'headingXS' : 'headingS'}
        fontWeight='bold'
        margin={['lg', 'none']}
      >
        Resuming Creating Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/resumeDP.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Skip Location */}
      <Typography
        variant={isMobile ? 'headingXS' : 'headingS'}
        fontWeight='bold'
        margin={['lg', 'none']}
      >
        Skipping Location - when user has location
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/skipLocation.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Throw  httpException*/}
      <Typography
        variant={isMobile ? 'headingXS' : 'headingS'}
        fontWeight='bold'
        margin={['lg', 'none']}
      >
        Throw httpException
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/throwException.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>
    </S.Container>
  );
};
