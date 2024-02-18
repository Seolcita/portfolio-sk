import { ReactElement } from 'react';

import { TitleBox } from '../../../../../atomic/title-box/title-box';
import * as S from './challenges.styles';
import Typography from '../../../../../atomic/Typography/Typography';

export const ChallengesChillyDog = (): ReactElement => {
  return (
    <S.Container>
      <S.TopicContainer>
        <TitleBox
          title='Overcoming Integration Delays with sk-storybook'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          While the planning phase was smooth, the actual implementation
          deviated from my initial expectations. In parallel to this project, I
          was concurrently involved in the sk-storybook project—a React
          component library. Unfortunately, not all components were prepared for
          integration into the Chilly Dog project. This mismatch between
          expectations and actual readiness led to delays. The experience
          highlighted the importance of thorough component readiness assessment
          and the need for flexible project timelines to accommodate integration
          complexities.
        </Typography>
      </S.TopicContainer>

      <S.TopicContainer>
        <TitleBox
          title='Adapting Architecture and Technology Stack Mid-Project'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          The initial plan to create a full-stack application solely with
          Next.js faced a challenge when incorporating Hexagonal architecture
          for the backend. Despite attempting to address this by implementing a
          separated backend with Express.js, I encountered obstacles again.
          Consequently, I made the decision to transition to Nest.js, an
          innovative and highly adaptable stack. I learned a practical lesson in
          the adaptability required in software development. It underscored the
          significance of choosing the right technology stack that aligns with
          the project&apos;s architectural needs and the agility needed to pivot
          strategies when faced with unforeseen challenges.
        </Typography>
      </S.TopicContainer>

      <S.TopicContainer>
        <TitleBox
          title='Embracing the Learning Curve Through Trials and Errors'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          Despite its modest scale, the project became a profound learning
          journey, characterized by numerous trials and errors. Each challenge
          encountered and overcome contributed significantly to my professional
          growth, enhancing my understanding of the development process. This
          hands-on experience has been invaluable, teaching me the intricacies
          of project management, the importance of adaptability, and the need
          for effective planning and foresight. It has ignited a deeper passion
          for software development and a desire to continuously improve and
          expand my skills as a developer.
        </Typography>
      </S.TopicContainer>
    </S.Container>
  );
};
