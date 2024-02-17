import { ReactElement } from 'react';

import * as S from '../../../chillyDog/tab-panels/challenges/challenges.styles';
import { TitleBox } from '../../../../../atomic/title-box/title-box';
import Typography from '../../../../../atomic/Typography/Typography';

export const ImprovementStorybook = (): ReactElement => {
  return (
    <S.Container>
      <S.TopicContainer>
        <TitleBox
          title='Integrating Automated Visual Testing with Chromatic'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          To elevate the quality and consistency of our React component library,
          incorporating automated visual testing through Chromatic stands out as
          a pivotal improvement for future iterations. Chromatic automates the
          capture and comparison of visual snapshots of components, making it
          effortless to identify and rectify visual regressions and
          inconsistencies across updates. This tool seamlessly integrates with
          Storybook, allowing us to leverage our existing component
          documentation for visual tests.
        </Typography>
      </S.TopicContainer>
    </S.Container>
  );
};
