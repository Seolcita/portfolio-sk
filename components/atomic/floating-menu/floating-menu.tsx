import { ElementType, ReactElement } from 'react';
import { styled } from '@mui/system';
import { SvgIconProps, Tooltip, Zoom } from '@mui/material';

import WebIcon from '@mui/icons-material/Web';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import * as S from './floating-menu.styles';

interface StyledIconProps {
  icon: ElementType<SvgIconProps>;
}

export const StyledIcon = styled(
  ({ icon: Icon, ...props }: StyledIconProps) => <Icon {...props} />
)`
  font-size: 3rem;
  color: #fff;
  transition: 0.5s;
  z-index: 1100;
`;

export const FloatingMenu = (): ReactElement => {
  return (
    <S.Container>
      <S.MenuUl>
        <S.MenuList>
          <Tooltip title='home' TransitionComponent={Zoom}>
            <a href='#hero'>
              <StyledIcon icon={HomeIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
        <S.MenuList>
          <Tooltip title='intro' TransitionComponent={Zoom}>
            <a href='#intro'>
              <StyledIcon icon={PersonIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
        <S.MenuList>
          <Tooltip title='about' TransitionComponent={Zoom}>
            <a href='#about'>
              <StyledIcon icon={LogoDevIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
        <S.MenuList>
          <Tooltip title='experience' TransitionComponent={Zoom}>
            <a href='#experience'>
              <StyledIcon icon={BusinessCenterIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
        <S.MenuList>
          <Tooltip title='skills' TransitionComponent={Zoom}>
            <a href='#skills'>
              <StyledIcon icon={AutoFixHighIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
        <S.MenuList>
          <Tooltip title='projects' TransitionComponent={Zoom}>
            <a href='#projects'>
              <StyledIcon icon={WebIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
        <S.MenuList>
          <Tooltip title='contact' TransitionComponent={Zoom}>
            <a href='#contact'>
              <StyledIcon icon={LocalPostOfficeIcon} />
            </a>
          </Tooltip>
        </S.MenuList>
      </S.MenuUl>
    </S.Container>
  );
};
