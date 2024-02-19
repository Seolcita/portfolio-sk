import { ReactElement } from 'react';
import { styled } from '@mui/system';
import { Tooltip, Zoom } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIconProps } from '@mui/material/SvgIcon';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import * as S from './contact.styles';

interface StyledIconProps {
  icon: React.ComponentType<SvgIconProps>;
}

export const StyledIcon = styled(
  ({ icon: Icon, ...props }: StyledIconProps) => <Icon {...props} />
)`
  font-size: 6rem;
  transition: 0.2s;
  color: #0a3d62;
  z-index: 1100;

  &:hover {
    color: #f1f1f1;
  }
`;

export const ContactInfo = (): ReactElement => {
  return (
    <S.Card>
      <S.IconsContainer>
        <Tooltip title='LinkedIn' TransitionComponent={Zoom} arrow>
          <S.Anchor
            href='https://www.linkedin.com/in/seolhikim'
            target='_blank'
          >
            <StyledIcon icon={LinkedInIcon} />
          </S.Anchor>
        </Tooltip>
        <Tooltip title='Github' TransitionComponent={Zoom} arrow>
          <S.Anchor href='https://github.com/Seolcita' target='_blank'>
            <StyledIcon icon={GitHubIcon} />
          </S.Anchor>
        </Tooltip>
        {/* TODO: Once Study note is published, release it */}
        {/* <Tooltip title='Study Note' TransitionComponent={Zoom} arrow>
          <S.Anchor
            href='https://www.notion.so/7e4673784848475e905ec1e017288b84?v=4e672e3431d3465a910e3655e96adc0d'
            target='_blank'
          >
            <StyledIcon icon={ArticleIcon} />
          </S.Anchor>
        </Tooltip> */}
        <Tooltip title='Instagram' TransitionComponent={Zoom} arrow>
          <S.Anchor href='https://www.instagram.com/sseori30' target='_blank'>
            <StyledIcon icon={InstagramIcon} />
          </S.Anchor>
        </Tooltip>
      </S.IconsContainer>
    </S.Card>
  );
};
