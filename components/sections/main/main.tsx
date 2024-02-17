'use client';

import { ReactElement, useLayoutEffect, useState } from 'react';

import * as S from './main.styles';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Menu } from '../../atomic/menu/menu';
import { MainSkills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Intorduction } from '../introduction/introduction';
import { FloatingMenu } from '../../atomic/floating-menu/floating-menu';
import { DeviceType, useWindowSize } from '../../../hooks/use-window-resize';

export const Main = (): ReactElement => {
  const { deviceType } = useWindowSize();
  const [smallDevice, setSmallDevice] = useState(false);

  useLayoutEffect(() => {
    if (deviceType === DeviceType.MOBILE || deviceType === DeviceType.TABLET) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  }, [deviceType]);

  return (
    <S.Wrapper>
      {smallDevice ? (
        <S.MenuBox>
          <Menu />
        </S.MenuBox>
      ) : (
        <S.FloatingMenuBox>
          <FloatingMenu />
        </S.FloatingMenuBox>
      )}
      <S.Container>
        <Hero />
        <Intorduction />
        <About />
        <Experience />
        <MainSkills />
        <Projects />
        <Contact />
      </S.Container>
    </S.Wrapper>
  );
};
