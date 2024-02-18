import { styled } from '@mui/system';
import { ElementType, ReactElement } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Box, Tooltip, Zoom } from '@mui/material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import * as S from './contact.styles';
import Typography from '../../atomic/Typography/Typography';

interface StyledIconProps {
  icon: React.ComponentType<SvgIconProps>;
}

export const StyledIcon = styled(
  ({ icon: Icon, ...props }: StyledIconProps) => <Icon {...props} />
)`
  font-size: 3rem;
  transition: 0.2s;
  color: #0a3d62;
  z-index: 1100;

  &:hover {
    transform: scale(0.8);
    color: #f1f1f1;
  }
`;

export const ContactInfo = (): ReactElement => {
  return (
    <S.Card>
      <Typography variant='headingXS' fontWeight='medium'>
        Connect with me!
      </Typography>
      <S.IconsContainer>
        <Tooltip title='LinkedIn' TransitionComponent={Zoom}>
          <S.Anchor
            href='https://www.linkedin.com/in/seolhikim'
            target='_blank'
          >
            <StyledIcon icon={LinkedInIcon} />
          </S.Anchor>
        </Tooltip>
        <Tooltip title='Github' TransitionComponent={Zoom}>
          <S.Anchor href='https://github.com/Seolcita' target='_blank'>
            <StyledIcon icon={GitHubIcon} />
          </S.Anchor>
        </Tooltip>
        <Tooltip title='Study Note' TransitionComponent={Zoom}>
          <S.Anchor
            href='https://www.notion.so/7e4673784848475e905ec1e017288b84?v=4e672e3431d3465a910e3655e96adc0d'
            target='_blank'
          >
            <StyledIcon icon={ArticleIcon} />
          </S.Anchor>
        </Tooltip>
        <Tooltip title='Project Manamenet' TransitionComponent={Zoom}>
          <S.Anchor
            href='https://www.notion.so/8c2bc421a6dc4ffc92203789e1c71c21?v=d4f9eeb6ee7741f58036a7babc2a140f'
            target='_blank'
          >
            <StyledIcon icon={ListAltIcon} />
          </S.Anchor>
        </Tooltip>
        <Tooltip title='Instagram' TransitionComponent={Zoom}>
          <S.Anchor href='https://www.instagram.com/sseori30' target='_blank'>
            <StyledIcon icon={InstagramIcon} />
          </S.Anchor>
        </Tooltip>
      </S.IconsContainer>
    </S.Card>
  );
};
