import { ReactElement } from 'react';
import * as S from './links.styles';
import Image from 'next/image';

import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '../../../../../atomic/Typography/Typography';

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
              Github(frontend)
            </Typography>
          </S.LinkItem>
        </a>

        <a href='https://github.com/Seolcita/with-dog' target='_blank'>
          <S.LinkItem>
            <GitHubIcon fontSize='large' sx={{ color: 'black' }} />
            <Typography
              variant='textM'
              fontWeight='bold'
              margin={['none', 'none', 'none', 'md']}
            >
              Github(backend)
            </Typography>
          </S.LinkItem>
        </a>

        <a
          href='https://seolhikim-projects.notion.site/seolhikim-projects/8da111c270a44a93b6124143116ddb26?v=a6a0e5fd87c5453ab2b46d948a3acf10'
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

        <a
          href='https://seolhikim-projects.notion.site/seolhikim-projects/8c2bc421a6dc4ffc92203789e1c71c21?v=d4f9eeb6ee7741f58036a7babc2a140f'
          target='_blank'
        >
          <S.LinkItem>
            <Image
              src='/assets/chilly-dog/wiki.svg'
              alt='notion'
              width={30}
              height={30}
              style={{
                borderRadius: '50%',
              }}
            />
            <Typography
              variant='textM'
              fontWeight='bold'
              margin={['none', 'none', 'none', 'md']}
            >
              Chilly Dog Wiki
            </Typography>
          </S.LinkItem>
        </a>
      </S.LinksContainer>
    </S.Container>
  );
};
