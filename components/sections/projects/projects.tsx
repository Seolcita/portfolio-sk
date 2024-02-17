import { ReactElement, useState } from 'react';

import * as S from './projects.styles';
import { Box, Button } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import { ChillyDogTabs } from './chillyDog/tabs/tabs';
import { StorybookTabs } from './storybook/tabs/tabs';

import { ProjectCards } from './project-cards';
import Typography from '../../atomic/Typography/Typography';

export const Projects = (): ReactElement => {
  const [toggleProject, setToggleProject] = useState(true);

  const projectTitle = toggleProject ? 'Storybook' : 'Chilly Dog';

  const handleOnClick = () => {
    setToggleProject(!toggleProject);
  };

  return (
    <S.Container id='projects'>
      <Typography variant='headingL' fontWeight='medium'>
        Projects
      </Typography>

      <ProjectCards />

      <S.ButtonContainer>
        <Button
          variant='contained'
          onClick={handleOnClick}
          sx={{ padding: '1rem 2rem' }}
        >
          <AutorenewIcon fontSize='large' />
          <Typography variant='textXS' color='white' margin={['none', 'md']}>
            Switch to
          </Typography>
          <Typography variant='textM' color='white' fontWeight='bold'>
            &nbsp;{projectTitle}&nbsp;&nbsp;
          </Typography>
          <Typography variant='textXS' color='white'>
            Detail
          </Typography>
        </Button>
      </S.ButtonContainer>

      <Box width={'100%'} bgcolor={'white'} borderRadius={'0.75rem'}>
        {toggleProject && <ChillyDogTabs />}
        {!toggleProject && <StorybookTabs />}
      </Box>
    </S.Container>
  );
};
