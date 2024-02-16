import { ReactElement } from 'react';

import { Card, Typography } from 'sk-storybook';
import * as S from './experience.styles';
import Image from 'next/image';

import NeoLogo from '../../../public/assets/neoLogo.png';

const tsUrl = '/assets/stack-logos/ts.svg';
const reactUrl = '/assets/stack-logos/react.png';
const nextUrl = '/assets/stack-logos/next.svg';
const storybooklUrl = '/assets/stack-logos/storybook.png';
const graphqlUrl = '/assets/stack-logos/graphql.png';
const expressUrl = '/assets/stack-logos/express.svg';
const mongodbUrl = '/assets/stack-logos/mongodb.svg';
const awsUrl = '/assets/stack-logos/aws.svg';

const stackLogos = [
  tsUrl,
  reactUrl,
  nextUrl,
  storybooklUrl,
  graphqlUrl,
  expressUrl,
  mongodbUrl,
  awsUrl,
];

export const Experience = (): ReactElement => {
  return (
    <S.Container id='experience'>
      <Typography variant='headingM' fontWeight='bold'>
        Experience
      </Typography>

      <S.ExperienceCardsContainer>
        <Card ariaLabel='Experience Card' isPadded>
          <S.CardContents>
            <Image
              src={NeoLogo}
              alt='neo logo'
              width={100}
              height={100}
              style={{
                borderRadius: '0.5rem',
                scale: 1.25,
                margin: '2rem',
              }}
            />
            <S.TextBox>
              <Typography variant='textXL' fontWeight='bold'>
                Fullstack Developer
              </Typography>
              <Typography variant='textM'>
                March 2021 - September 2022
              </Typography>

              <S.StackContainer>
                {stackLogos.map((logo) => {
                  return (
                    <Image
                      src={logo}
                      alt='stack logo'
                      width={30}
                      height={30}
                      style={{
                        borderRadius: '50%',
                        marginRight: '1rem',
                      }}
                    />
                  );
                })}
              </S.StackContainer>
            </S.TextBox>
          </S.CardContents>
        </Card>
      </S.ExperienceCardsContainer>
      <S.TextContainer>
        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Experience at Neo Financial
          </Typography>
          <Typography variant='textL'>
            In my previous position as an Intermediate Software Engineer at Neo
            Financial, I was deeply involved in developing cutting-edge
            financial technology solutions. This job was a significant milestone
            in my career and provided me with the opportunity to apply and
            enhance my skills in a dynamic, fast-paced environment.
          </Typography>
        </S.Pharagraph>

        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Full Lifecycle Software Development Experience
          </Typography>
          <Typography variant='textL'>
            My time at Neo Financial was marked by involvement in a variety of
            challenging projects, providing me with comprehensive experience
            across the software development lifecycle, including planning,
            development, deployment, and maintenance. This period was
            instrumental in honing my expertise in TypeScript, React.js,
            Next.js, Storybook, Material-UI, GraphQL, Express, MongoDB, AWS, and
            GitHub, in addition to developing my communication and teamwork
            abilities.
          </Typography>
        </S.Pharagraph>

        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Key Project: Annual Reassessment for Investment Products
          </Typography>
          <Typography variant='textL'>
            A notable project was the Annual Reassessment project for investment
            product users, a compliance-driven project with a stringent
            timeline.My responsibilities encompassed foundational work on both
            the backend and frontend partially, presenting a formidable
            challenge that ultimately deepened my understanding of project
            management. This project highlighted the essence of teamwork and
            collaboration, proving to be a highly rewarding experience.
          </Typography>
        </S.Pharagraph>

        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Cross-Team Collaboration and Innovation
          </Typography>
          <Typography variant='textL'>
            At Neo Financial, my collaboration extended across multiple teams.
            With the Frontend team, I enhanced application layouts using CSS
            Grid and contributed to the development of a new React component
            library and a VIPER architecture-based web application for business
            owners. Additionally, I played a key role in the onboarding process
            for new product launches, necessitating close cooperation with
            various engineering teams.
          </Typography>
        </S.Pharagraph>

        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Commitment to Documentation and Knowledge Sharing
          </Typography>
          <Typography variant='textL'>
            I took the initiative to meticulously document the entire task
            process, from ticket acquisition to deployment, to aid both myself
            and future team members in understanding our workflow. This
            documentation later became a vital part of the onboarding materials
            for new engineers, facilitating a smoother transition into our
            projects and processes.
          </Typography>
        </S.Pharagraph>

        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Rapid Advancement: From Junior to Intermediate Fullstack Developer
            at Neo Financial
          </Typography>
          <Typography variant='textL'>
            In my role as an Intermediate Fullstack Developer at Neo Financial,
            I was deeply involved in the development of cutting-edge financial
            technology solutions. This position was not only a pivotal point in
            my career but also a testament to my rapid professional growth, as I
            was promoted from Junior to Intermediate Engineer within just 10
            months. This accelerated advancement offered me the chance to
            further refine my technical skills within a dynamic and fast-paced
            setting.
          </Typography>
        </S.Pharagraph>

        <S.Pharagraph>
          <Typography variant='headingXS' fontWeight='bold'>
            Professional Development and Continuous Learning
          </Typography>
          <Typography variant='textL'>
            My tenure at Neo Financial reinforced my commitment to continuous
            learning. I actively pursued professional development opportunities
            and kept myself updated with emerging technologies and practices
            that could elevate our products and services. This job not only
            solidified my technical capabilities but also enhanced my
            problem-solving and collaborative skills, enabling me to tackle
            complex challenges and make meaningful contributions in a global
            work environment.
          </Typography>
        </S.Pharagraph>
      </S.TextContainer>
    </S.Container>
  );
};
