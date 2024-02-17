import { ReactElement } from 'react';

import { TitleBox } from '../../../../../atomic/title-box/title-box';
import * as S from '../../../chillyDog/tab-panels/challenges/challenges.styles';
import Typography from '../../../../../atomic/Typography/Typography';

export const ChallengesStorybook = (): ReactElement => {
  return (
    <S.Container>
      <S.TopicContainer>
        <TitleBox
          title='Overcoming the Initial Hurdles of NPM Creation'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          My venture into publishing my first NPM introduced me to a series of
          complex hurdles, especially during the setup and configuration phases
          for styled-components and generating type definitions were
          particularly challenging. Despite these obstacles, this journey has
          broadened my understanding and skills in these areas. Turning these
          initial challenges into opportunities, I've gained invaluable
          knowledge.
        </Typography>
      </S.TopicContainer>
    </S.Container>
  );
};
