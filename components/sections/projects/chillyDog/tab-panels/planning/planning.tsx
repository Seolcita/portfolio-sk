import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';

import * as S from './planning.styles';
import { TitleBox } from '../../../../../atomic/title-box/title-box';

export const PlanningChillyDog = (): ReactElement => {
  return (
    <S.Container>
      {/* Purpose */}
      <S.TopicContainer>
        <TitleBox title='Purpose' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>
              Creating fullstack web application using Next.js, Nest.js,
              Typescript, MongoDB, styled-components, REST API,
              react-testing-library and sk-storybook
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Currently, sk-storybook(React component library) project is in
              process. Install the package and use it in Chilly Dog application.
              Check whether sk-storybook components works as intended
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Enhancing the implementation of accessibility skills.
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Improving project planning skill
            </Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Scope */}
      <S.TopicContainer>
        <TitleBox title='Scope' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>
              Authentication - Google sign in
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>CRUD dog profile</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              User can stop at any time and resume later without losing user’s
              progress
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Display current weather information - weather API
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Calculate result with current weather information and dog profile
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Focus on accessibility to ensure optimal usability for users
              relying on screen readers and keyboard navigation
            </Typography>
            <Typography variant='textM'>
              - User should able to access entire app by using tab only
            </Typography>
            <Typography variant='textM'>
              - App should tell user component’s status and alert properly
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Fully responsive</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Target Audience */}
      <S.TopicContainer>
        <TitleBox title='Target Audience' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>Dog owners</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Age group: All</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Tech Stack */}
      <S.TopicContainer>
        <TitleBox title='Tech Stack' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Frontend
            </Typography>
            <Typography variant='textM'>Next.js & Typescript</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Backend
            </Typography>
            <Typography variant='textM'>Nest.js & Typescript</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Database
            </Typography>
            <Typography variant='textM'>MongoDB & Mongoose</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Styling
            </Typography>
            <Typography variant='textM'>
              styled-components & sk-storybook(react component library I
              published)
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Testing
            </Typography>
            <Typography variant='textM'>
              React Testing Library & Jest
            </Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Development Environment */}
      <S.TopicContainer>
        <TitleBox title='Development Environment' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Version Control
            </Typography>
            <Typography variant='textM'>Git & Github</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Code Quality Tools
            </Typography>
            <Typography variant='textM'>ESLint & Prettier</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Development Tools
            </Typography>
            <Typography variant='textM'>VSCode</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Project Timeline and Milestones */}
      <S.TopicContainer>
        <TitleBox
          title='Project Timeline and Milestones'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM' margin={['lg', 'none', 'none']}>
          Three sprints and a maintenance phase are planned, with each sprint
          having a duration of three weeks.
        </Typography>
        <S.Ul>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Sprint 1
            </Typography>
            <Typography variant='textM'>
              Frontend (setup + components)
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Sprint 2
            </Typography>
            <Typography variant='textM'>Backend + hook Frontend</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Sprint 3
            </Typography>
            <Typography variant='textM'>
              Improvement (refactor, accessibility)
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM' fontWeight='bold'>
              Maintenance
            </Typography>
            <Typography variant='textM'>
              Working on bugs and feedbacks
            </Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Implementation */}
      <S.TopicContainer>
        <TitleBox title='Implementation' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>Start Coding</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Continuous Integration/Continuous Development (CI/CD)
            </Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Testing and Quality Assurance */}
      <S.TopicContainer>
        <TitleBox
          title='Testing and Quality Assurance'
          imgUrl='/assets/logo.svg'
        />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>Write Tests</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Manual Testing</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Deployment */}
      <S.TopicContainer>
        <TitleBox title='Deployment' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>Deploy Frontend and Backend</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Gather Feedback from Test Users
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Addressing on feedbacks and bugs
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Release to the public</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Maintenance and Updates */}
      <S.TopicContainer>
        <TitleBox title='Maintenance and Updates' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>Fixing bugs</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Addressing feedbacks</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Dependency Management</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>
    </S.Container>
  );
};
