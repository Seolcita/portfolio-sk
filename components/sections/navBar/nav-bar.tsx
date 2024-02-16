import { ReactElement } from 'react';

import * as S from './nav-bar.styles';
import Image from 'next/image';

export const NavBar = (): ReactElement => {
  return (
    <S.Container>
      <S.Navigation>
        <ul>
          <S.Logo>
            <S.NavItem href='#hero'>
              <Image
                src='/assets/seolLogo.png'
                alt='Logo'
                width={30}
                height={30}
                style={{
                  borderRadius: '50%',
                  border: '2px solid #FFF',
                  maxWidth: '40px',
                  maxHeight: '40px',
                  marginLeft: '1rem',
                  marginTop: '1rem',
                }}
              />
            </S.NavItem>
          </S.Logo>
          <S.Navs>
            <S.NavItem href='#intro'>Intro</S.NavItem>
            <S.NavItem href='#about'>About Me</S.NavItem>
            <S.NavItem href='#experience'>Experience</S.NavItem>
            <S.NavItem href='#skills'>Skills</S.NavItem>
            <S.NavItem href='#projects'>Projects</S.NavItem>
            <S.NavItem href='#contact'>Contact</S.NavItem>
          </S.Navs>
        </ul>
      </S.Navigation>
    </S.Container>
  );
};
