import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './flows.styles';

export const FlowChillyDog = (): ReactElement => {
  return (
    <S.Container>
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
        Creating First Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/createFlow.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '5rem' }}
        />
      </S.ImageContainer>

      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
        Resuming Creating Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/resume.png'
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
