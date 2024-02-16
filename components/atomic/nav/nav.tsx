import { ReactElement } from 'react';

import * as S from './nav.styles';
import Image from 'next/image';
import { dancingScript } from '../../../styles/Fonts';

export const NavBar = (): ReactElement => {
  return (
    <S.Navigation className={dancingScript.className}>
      <ul>
        <S.NavItem href='#hero'>
          <S.Logo>
            <Image
              src='/assets/seolLogo.png'
              alt='Logo'
              width={30}
              height={30}
              style={{
                borderRadius: '50%',
                border: '2px solid #FFF',
                maxWidth: '30px',
                maxHeight: '30px',
                marginLeft: '1rem',
                marginTop: '1rem',
              }}
            />
            <span>{`Seol's Portfolio`}</span>
          </S.Logo>
        </S.NavItem>
        <S.NavItem href='#intro'>Intro</S.NavItem>
        <S.NavItem href='#about'>About Me</S.NavItem>
        <S.NavItem href='#experience'>Experience</S.NavItem>
        <S.NavItem href='#skills'>Skills</S.NavItem>
        <S.NavItem href='#projects'>Projects</S.NavItem>
        <S.NavItem href='#contact'>Contact</S.NavItem>
      </ul>
    </S.Navigation>
  );
};
