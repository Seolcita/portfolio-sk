import { ReactElement } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Card } from 'sk-storybook';
import Image from 'next/image';

import * as S from './project-cards.styles';
import Typography from '../../atomic/Typography/Typography';

export const ProjectCards = (): ReactElement => {
  return (
    <S.ProjectCardsContainer>
      {/* Chilly Dog Project Card */}
      <S.CardContainer>
        <Card ariaLabel='Chilly dog project card'>
          <S.CardContents>
            <S.TitleContainer>
              <Typography variant='headingXS' fontWeight='bold'>
                Chilly Dog
              </Typography>
            </S.TitleContainer>
            <Image
              src='/assets/chilly-dog/mainpage.png'
              alt='Logo'
              layout='responsive'
              width={50}
              height={50}
              style={{
                border: '0.2rem solid white',
                borderRadius: '0.5rem',
              }}
            />
            <S.LinksContainer>
              <a href='https://chillydog.vercel.app' target='_blank'>
                <S.LinkItem>
                  <Image
                    src='/assets/logo.svg'
                    alt='Logo'
                    width={25}
                    height={25}
                    style={{
                      borderRadius: '50%',
                    }}
                  />
                  <Typography
                    variant='textM'
                    fontWeight='bold'
                    margin={['none', 'none', 'none', 'md']}
                  >
                    Live App
                  </Typography>
                </S.LinkItem>
              </a>
              <a href='https://github.com/Seolcita/chillydog' target='_blank'>
                <S.LinkItem>
                  <GitHubIcon fontSize='large' sx={{ color: 'black' }} />
                  <Typography
                    variant='textM'
                    fontWeight='bold'
                    margin={['none', 'none', 'none', 'md']}
                  >
                    Github
                  </Typography>
                </S.LinkItem>
              </a>
            </S.LinksContainer>
          </S.CardContents>
        </Card>
      </S.CardContainer>

      {/* Chilly Dog Project Card */}
      <S.CardContainer>
        <Card ariaLabel='sk-storybook project card'>
          <S.CardContents>
            <S.TitleContainer>
              <Typography variant='headingXS' fontWeight='bold'>
                SK-Storybook
              </Typography>
            </S.TitleContainer>
            <Image
              src='/assets/storybook/storybook.png'
              alt='Logo'
              layout='responsive'
              width={50}
              height={50}
              style={{
                border: '0.2rem solid black',
                borderRadius: '0.5rem',
              }}
            />
            <S.LinksContainer>
              <a href='https://sk-storybook.vercel.app' target='_blank'>
                <S.LinkItem>
                  <Image
                    src='/assets/stack-logos/storybook.png'
                    alt='Logo'
                    width={25}
                    height={25}
                    style={{
                      borderRadius: '50%',
                    }}
                  />
                  <Typography
                    variant='textM'
                    fontWeight='bold'
                    margin={['none', 'none', 'none', 'sm']}
                  >
                    Live App
                  </Typography>
                </S.LinkItem>
              </a>

              <a href='https://github.com/Seolcita/s-storybook' target='_blank'>
                <S.LinkItem>
                  <GitHubIcon fontSize='large' sx={{ color: 'black' }} />
                  <Typography
                    variant='textM'
                    fontWeight='bold'
                    margin={['none', 'none', 'none', 'md']}
                  >
                    Github
                  </Typography>
                </S.LinkItem>
              </a>
            </S.LinksContainer>
          </S.CardContents>
        </Card>
      </S.CardContainer>
    </S.ProjectCardsContainer>
  );
};
