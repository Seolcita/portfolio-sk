import { ReactElement } from 'react';
import * as S from './sprints.styles';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

export const SprintsChillyDog = (): ReactElement => {
  return (
    <S.Container>
      {/* Sprints */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Sprints
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprints.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Sprint 1 */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Sprint 1
      </Typography>
      <Typography
        variant='textXL'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Frontend (setup & components)
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprint1.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Sprint 2 */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Sprint 2
      </Typography>
      <Typography
        variant='textXL'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Backend (backend + hook Frontend)
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprint2.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Sprint 3 */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Sprint 3
      </Typography>
      <Typography
        variant='textXL'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Improvement (fix, refactor, accessibility, UI/UX)
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/sprint3.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Maintenance  */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Maintenance
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/maintanance.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Bugs */}
      <Typography
        variant='headingS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
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
