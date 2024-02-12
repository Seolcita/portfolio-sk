import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './sprints.styles';

export const SprintsStorybook = (): ReactElement => {
  return (
    <S.Container>
      {/* Sprints */}
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
        Sprints
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprints.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Sprint 1 */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Sprint 1
      </Typography>
      <Typography variant='textL'>Frontend (setup & components)</Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprint1.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Sprint 2 */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Sprint 2
      </Typography>
      <Typography variant='textL'>Backend (backend + hook Frontend)</Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprint2.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Sprint 3 */}
      <Typography
        variant='textXL'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Sprint 3
      </Typography>
      <Typography variant='headingXS'>
        Improvement (fix, refactor, accessibility, UI/UX)
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprint3.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Maintenance  */}
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
        Maintenance
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/maintanance.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '4rem' }}
        />
      </S.ImageContainer>

      {/* Bugs */}
      <Typography variant='headingXS' fontWeight='bold' margin={['lg', 'none']}>
        Bugs
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/bugs.png'
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
