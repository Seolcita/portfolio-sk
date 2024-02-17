import { ReactElement, useEffect, useState } from 'react';

import * as S from './about.styles';
import Typography from '../../atomic/Typography/Typography';

export const About = (): ReactElement => {
  return (
    <S.Container id='about'>
      <Typography variant='headingL' fontWeight='medium'>
        About me
      </Typography>
      <S.TextContainer>
        <S.Pharagraph>
          <Typography variant='textL'>
            Throughout my professional career, I have consistently demonstrated
            my capabilities. My work is a testament to my commitment to
            excellence, innovation, and user-friendly design, highlighting my
            ability to simplify complex problems into intuitive, accessible
            solutions.
          </Typography>
        </S.Pharagraph>
        <S.Pharagraph>
          <Typography variant='textL'>
            Beyond my professional achievements, I am a firm believer in
            continuous learning and personal growth. With a goal to work
            anywhere with internet connectivity, I am more than just a software
            developer; I am a global tech enthusiast, poised to make a mark on
            the world, one line of code at a time. My portfolio is a window into
            my world of coding, creativity, and my aspiration to create a global
            impact in the tech industry.
          </Typography>
        </S.Pharagraph>
      </S.TextContainer>
    </S.Container>
  );
};
