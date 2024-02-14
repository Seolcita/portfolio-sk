import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import { Box, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import * as S from './contact.styles';

export const ContactInfo = (): ReactElement => {
  return (
    <S.LeftContainer>
      <S.Card>
        <Box display='flex' flexDirection='column' alignItems='start' gap={1}>
          <Typography variant='headingXS' fontWeight='bold'>
            Let's get in touch
          </Typography>
          <S.Item>
            <PhoneAndroidIcon fontSize='medium' />
            <Typography variant='textM'>1.403.903.1461</Typography>
          </S.Item>

          <S.Item>
            <EmailIcon fontSize='medium' />
            <Typography variant='textM'>seolhikimdev@gmail.com</Typography>
          </S.Item>

          <S.Item>
            <LocationOnIcon fontSize='medium' />
            <Typography variant='textM'>Calgary, Canada</Typography>
          </S.Item>
        </Box>
        <Box>
          <Typography variant='headingXS' fontWeight='bold'>
            Let's get in touch
          </Typography>
          <S.IconsContainer>
            <IconButton>
              <a href='https://www.linkedin.com/in/seolhikim' target='_blank'>
                <LinkedInIcon
                  fontSize='large'
                  aria-label='linkedIn'
                  sx={{ color: 'black' }}
                />
              </a>
            </IconButton>
            <IconButton>
              <a href='https://github.com/Seolcita' target='_blank'>
                <GitHubIcon
                  fontSize='large'
                  aria-label='github'
                  sx={{ color: 'black' }}
                />
              </a>
            </IconButton>
            <IconButton>
              <a
                href='https://www.notion.so/7e4673784848475e905ec1e017288b84?v=4e672e3431d3465a910e3655e96adc0d'
                target='_blank'
              >
                <ArticleIcon
                  fontSize='large'
                  aria-label='study note in notion'
                  sx={{ color: 'black' }}
                />
              </a>
            </IconButton>
            <IconButton>
              <a
                href='https://www.notion.so/8c2bc421a6dc4ffc92203789e1c71c21?v=d4f9eeb6ee7741f58036a7babc2a140f'
                target='_blank'
              >
                <ListAltIcon
                  fontSize='large'
                  aria-label='projects management in notion'
                  sx={{ color: 'black' }}
                />
              </a>
            </IconButton>
            <IconButton>
              <a href='https://www.instagram.com/sseori30' target='_blank'>
                <InstagramIcon
                  fontSize='large'
                  aria-label='instgram'
                  sx={{ color: 'black' }}
                />
              </a>
            </IconButton>
          </S.IconsContainer>
        </Box>
      </S.Card>
    </S.LeftContainer>
  );
};
