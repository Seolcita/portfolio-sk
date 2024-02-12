import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './usecase.styles';

export const UseCaseChillyDog = (): ReactElement => {
  return (
    <S.Container>
      {/* Create First Dog Profile */}
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
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
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
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
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
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
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
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
