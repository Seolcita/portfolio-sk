import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './flows.styles';

export const FlowChillyDog = (): ReactElement => {
  return (
    <S.Container>
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Creating First Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/createFlow.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Resume Dog Profile
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
