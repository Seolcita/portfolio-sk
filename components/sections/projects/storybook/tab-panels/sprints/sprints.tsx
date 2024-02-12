import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './sprints.styles';

export const SprintsStorybook = (): ReactElement => {
  return (
    <S.Container>
      <Typography variant='headingXS' margin={['lg', 'none', 'none']}>
        This project is on going. The timeline is not fixed.
      </Typography>
      <Typography variant='textXS' margin={['none', 'none', 'lg']}>
        Earlier, the project was using Jira but has since transitioned to Notion
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/storybook/tasks.png'
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
