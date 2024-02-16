import { ReactElement, useEffect, useState } from 'react';

import { Typography } from 'sk-storybook';
import * as S from './about.styles';
import { MoveImageProps } from '../hero/hero';

const penguin1 = '/assets/parallax/penguin1.png';
const penguin2 = '/assets/parallax/penguin2.png';
const penguin3 = '/assets/parallax/penguin3.png';

export const About = (): ReactElement => {
  const [penguinOneMovement, setPenguineOneMovement] =
    useState<MoveImageProps>();
  const [penguinTwoMovement, setPenginTwoMovement] = useState<MoveImageProps>();
  const [penguinThreeMovement, setPenguinThreeMovement] =
    useState<MoveImageProps>();

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.ceil(window.scrollY);
      console.log('scroll', scroll);
      setPenguineOneMovement({
        xAxis: scroll * -0.05,
        yAxis: scroll * 0.05,
        zAxis: scroll * 0.01,
      });
      setPenginTwoMovement({
        xAxis: scroll * -0.06,
        yAxis: scroll * 0.025,
        zAxis: scroll * 0.01,
      });
      setPenguinThreeMovement({
        xAxis: scroll * -0.02,
        yAxis: scroll * 0.01,
        zAxis: scroll * 0.01,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.PenguinOne
        $movement={penguinOneMovement}
        src={penguin1}
        width={300}
        height={300}
        alt='Hero Image'
        layout='responsive'
      />
      <S.PenguinTwo
        $movement={penguinTwoMovement}
        src={penguin2}
        width={300}
        height={300}
        alt='Hero Image'
        layout='responsive'
      />
      <S.PenguinThree
        $movement={penguinThreeMovement}
        src={penguin3}
        width={300}
        height={300}
        alt='Hero Image'
        layout='responsive'
      />
      <Typography variant='headingM' fontWeight='bold'>
        About me
        {/* {JSON.stringify(penguinTwoMovement)} */}
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
