import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import * as S from './links.styles';
import Image from 'next/image';

import GitHubIcon from '@mui/icons-material/GitHub';

export const LinksChillyDog = (): ReactElement => {
  return (
    <S.Container>
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

        <a
          href='https://www.notion.so/8da111c270a44a93b6124143116ddb26?v=a6a0e5fd87c5453ab2b46d948a3acf10'
          target='_blank'
        >
          <S.LinkItem>
            <Image
              src='/assets/storybook/notion.svg'
              alt='notion'
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
              Chilly Dog Tasks Details
            </Typography>
          </S.LinkItem>
        </a>
      </S.LinksContainer>
    </S.Container>
  );
};
