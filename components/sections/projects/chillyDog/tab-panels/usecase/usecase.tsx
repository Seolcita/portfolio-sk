import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';

import * as S from './usecase.styles';
import Image from 'next/image';

export const UseCaseChillyDog = (): ReactElement => {
  return (
    <S.Container>
      {/* Create First Dog Profile */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Create First Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/createDP.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Resume Dog Profile */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Resume Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/resumeDP.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Skip Location */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Skip Location
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/skipLocation.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Throw  httpException*/}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
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
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>
    </S.Container>
  );
};
