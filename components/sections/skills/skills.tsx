import { ReactElement } from 'react';

import * as S from './skills.styles';
import { TurningBox } from '../../atomic/turning-box/turning-box';
import Typography from '../../atomic/Typography/Typography';
import { Box } from '@mui/material';

const jsUrl = '/assets/stack-logos/js.svg';
const tsUrl = '/assets/stack-logos/ts.svg';
const reactUrl = '/assets/stack-logos/react.png';
const nextUrl = '/assets/stack-logos/next.svg';
const restUrl = '/assets/stack-logos/rest.png';
const graphqlUrl = '/assets/stack-logos/graphql.png';
const styledlUrl = '/assets/stack-logos/styled.svg';
const accessibilitylUrl = '/assets/stack-logos/accessibility.svg';
const storybooklUrl = '/assets/stack-logos/storybook.png';
const expressUrl = '/assets/stack-logos/express.svg';
const nestUrl = '/assets/stack-logos/nest.svg';
const mongodbUrl = '/assets/stack-logos/mongodb.svg';
const reactNativeUrl = '/assets/stack-logos/reactNative.svg';
const blenderUrl = '/assets/stack-logos/blender.svg';
const threeUrl = '/assets/stack-logos/three.svg';

export const MainSkills = (): ReactElement => {
  return (
    <S.Container id='skills'>
      <Typography variant='headingL' fontWeight='medium'>
        Skills
      </Typography>

      <S.SkillsContainer>
        <TurningBox imageUrl={jsUrl} title='Javascript' />
        <TurningBox imageUrl={tsUrl} title='Typescript' />
        <TurningBox imageUrl={reactUrl} title='React' />
        <TurningBox imageUrl={nextUrl} title='Next' />
        <TurningBox imageUrl={restUrl} title='REST API' />
        <TurningBox imageUrl={graphqlUrl} title='GraphQL' />
        <TurningBox imageUrl={styledlUrl} title='Styled Components' />
        <TurningBox imageUrl={accessibilitylUrl} title='Accessibility' />
        <TurningBox imageUrl={storybooklUrl} title='Storybook' />
        <TurningBox imageUrl={expressUrl} title='Express' />
        <TurningBox imageUrl={nestUrl} title='Nest' />
        <TurningBox imageUrl={mongodbUrl} title='MongoDB' />
      </S.SkillsContainer>

      <Box marginTop={13} textAlign='center'>
        <Typography variant='headingL' fontWeight='medium'>
          In-Progress Skills
        </Typography>
      </Box>

      <S.InProgressSkillsContainer>
        <TurningBox imageUrl={reactNativeUrl} title='React Native' />
        <TurningBox imageUrl={threeUrl} title='React Three Fiber' />
        <TurningBox imageUrl={blenderUrl} title='Blender' />
      </S.InProgressSkillsContainer>
    </S.Container>
  );
};
