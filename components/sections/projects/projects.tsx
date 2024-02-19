import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

import Typography from '../../atomic/Typography/Typography';
import { ChillyDogTabs } from './chillyDog/tabs/tabs';
import { StorybookTabs } from './storybook/tabs/tabs';
import { ProjectCards } from './project-cards';
import * as S from './projects.styles';

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
        <S.CompleteButton onClick={handleOnClick} aria-label='Complete Profile'>
          <AutorenewIcon fontSize='large' />
          <Typography variant='textS' color='white' margin={['none', 'md']}>
            Switch to
          </Typography>
          <Typography variant='textM' color='white' fontWeight='medium'>
            &nbsp;{projectTitle}&nbsp;
          </Typography>
        </S.CompleteButton>
      </S.ButtonContainer>
      <Box width={'100%'} bgcolor={'white'} borderRadius={'0.75rem'}>
        {toggleProject && <ChillyDogTabs />}
        {!toggleProject && <StorybookTabs />}
      </Box>
    </S.Container>
  );
};
