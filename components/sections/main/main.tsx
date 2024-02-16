'use client';

import { ReactElement } from 'react';

import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Intorduction } from '../introduction/introduction';
import { MainSkills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';
import * as S from './main.styles';

export const Main = (): ReactElement => {
  return (
    <S.Container>
      <Hero />
      <Intorduction />
      <About />
      <Experience />
      <MainSkills />
      <Projects />
      <Contact />
    </S.Container>
  );
};
