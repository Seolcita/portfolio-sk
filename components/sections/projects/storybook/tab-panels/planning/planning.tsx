import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';

import * as S from './planning.styles';
import { TitleBox } from '../../../../../atomic/title-box/title-box';

export const PlanningStorybook = (): ReactElement => {
  return (
    <S.Container>
      {/* Purpose */}
      <S.TopicContainer>
        <TitleBox title='Purpose' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>
              Creating a Node Package Manager(NPM)
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Developing a React Component Library establishing a robust and
              reusable collection of UI components
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Developing environment for UI components, enabling isolated,
              interactive, and documented views for efficient component testing
              and showcasing
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Enhancing the implementation of accessibility skills
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Integrate this library into the Chilly Dog project
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
              Creating a Node Package Manager
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Focus on accessibility to ensure optimal usability for users
              relying on screen readers and keyboard navigation
            </Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Target Audience */}
      <S.TopicContainer>
        <TitleBox title='Target Audience' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>React Developers</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Designers</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Tech Stack */}
      <S.TopicContainer>
        <TitleBox title='Tech Stack' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>React</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Typescript</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Storybook</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>React Testing Library</Typography>
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

      {/* Project Timeline */}
      <S.TopicContainer>
        <TitleBox title='Project Timeline' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>
              This is on going project. The timeline is not fixed.
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

      {/* Publish */}
      <S.TopicContainer>
        <TitleBox title='Publish' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>Publish npm package</Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Integrate this library into the Chilly Dog project
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>
              Address any identified bugs following the integration process
            </Typography>
          </S.Li>
          <S.Li>
            <Typography variant='textM'>Re publish</Typography>
          </S.Li>
        </S.Ul>
      </S.TopicContainer>

      {/* Deployment */}
      <S.TopicContainer>
        <TitleBox title='Deployment' imgUrl='/assets/logo.svg' />
        <S.Ul>
          <S.Li>
            <Typography variant='textM'>
              Deploy SK-Storybook project on Vercel
            </Typography>
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
