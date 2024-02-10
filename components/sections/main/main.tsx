'use client';

import { ReactElement } from 'react';

// import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Intorduction } from '../introduction/introduction';
import { MainSkills } from '../skills/skills';
// import { InProgressSkills } from '../skills/in-progress-skills';
// import { Experience } from '../experience/experience';
// import { Projects } from '../projects/projects';
// import { References } from '../references/references';
// import { Contact } from '../contact/contact';
import * as S from './main.styles';

export const Main = (): ReactElement => {
  return (
    <S.Container>
      <Intorduction />
      <About />
      <MainSkills />
      {/* <Hero />
      <InProgressSkills />
      <Experience />
      <Projects />
      <References />
      <Contact /> */}
    </S.Container>
  );
};
