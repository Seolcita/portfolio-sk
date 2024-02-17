import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { FloatingMenu, StyledIcon } from '../floating-menu/floating-menu';
import * as S from '../floating-menu/floating-menu.styles';
import * as s from './menu.styles';

export const Menu = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <s.Container>
      <S.MenuUl>
        <S.MenuList>
          <Box onClick={() => setIsOpen(!isOpen)} zIndex={1100}>
            <StyledIcon icon={isOpen ? CloseIcon : MenuIcon} />
          </Box>
        </S.MenuList>
      </S.MenuUl>
      <s.Slider $isOpen={isOpen}>
        <FloatingMenu />
      </s.Slider>
    </s.Container>
  );
};
