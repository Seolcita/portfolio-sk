import { ReactElement } from 'react';

import * as S from './projects.styles';
import { Typography } from 'sk-storybook';
import { Box } from '@mui/material';
import { ChillyDogMain } from './chillyDog/main/main';
import { ChillyDogTabs } from './chillyDog/tabs/tabs';
import { StorybookTabs } from './storybook/tabs/tabs';
import { StorybookMain } from './storybook/main/main';

export const Projects = (): ReactElement => {
  return (
    <S.Container>
      <Typography variant='headingM' fontWeight='bold'>
        Projects
      </Typography>
      <Box width={'100%'} bgcolor={'skyblue'} marginTop={'5rem'}>
        <ChillyDogMain />
      </Box>
      <Box width={'100%'} bgcolor={'skyblue'} marginTop={'5rem'}>
        <StorybookMain />
      </Box>
    </S.Container>
  );
};
