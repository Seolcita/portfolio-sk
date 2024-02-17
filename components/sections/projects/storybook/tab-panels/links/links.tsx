import { ReactElement } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

import * as S from '../../../chillyDog/tab-panels/links/links.styles';
import Typography from '../../../../../atomic/Typography/Typography';

export const LinksStorybook = (): ReactElement => {
  return (
    <S.Container>
      <S.LinksContainer>
        <a href='https://sk-storybook.vercel.app' target='_blank'>
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

        <a href='https://www.npmjs.com/package/sk-storybook' target='_blank'>
          <S.LinkItem>
            <Image
              src='/assets/storybook/npm.svg'
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
              NPM
            </Typography>
          </S.LinkItem>
        </a>

        <a
          href='https://www.notion.so/ccf3d1001e304b7c848a08a88f756358?v=89e223e6293049c1930b2a900ab083da'
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
              SK-Storybook Tasks Details
            </Typography>
          </S.LinkItem>
        </a>
      </S.LinksContainer>
    </S.Container>
  );
};
