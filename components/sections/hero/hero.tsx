'use client';

import { ReactElement, useEffect, useState } from 'react';

import { dancingScript } from '../../../styles/Fonts';
import * as S from './hero.styles';

const background = '/assets/hero/bg.png';
const whale = '/assets/hero/whale.png';
const bird1 = '/assets/hero/bird1.png';
const bird2 = '/assets/hero/bird2.png';
const bird3 = '/assets/hero/bird3.png';
const birdsSmall = '/assets/hero/birdsSmall.png';
const birdsLarge = '/assets/hero/birdsLarge.png';
const penguin1 = '/assets/hero/penguin1.png';
const penguin2 = '/assets/hero/penguin2.png';
const penguin3 = '/assets/hero/penguin3.png';

export interface MoveImageProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  rotate?: number;
  xAxis?: number;
  yAxis?: number;
  zAxis?: number;
}

export const Hero = (): ReactElement => {
  const [backgroundMovement, setBackgroundMovement] =
    useState<MoveImageProps>();
  const [whaleMovement, setWhaleMovement] = useState<MoveImageProps>();
  const [birdOneMovement, setBirdOneMovement] = useState<MoveImageProps>();
  const [birdTwoMovement, setBirdTwoMovement] = useState<MoveImageProps>();
  const [birdThreeMovement, setBirdThreeMovement] = useState<MoveImageProps>();
  const [birdsSmallMovement, setBirdsSmallMovement] =
    useState<MoveImageProps>();
  const [birdsLargeMovement, setBirdsLargeMovement] =
    useState<MoveImageProps>();
  const [penguinOneMovement, setPenguineOneMovement] =
    useState<MoveImageProps>();
  const [penguinTwoMovement, setPenginTwoMovement] = useState<MoveImageProps>();
  const [penguinThreeMovement, setPenguinThreeMovement] =
    useState<MoveImageProps>();

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.ceil(window.scrollY);
      setBackgroundMovement({ top: scroll * 0.2 });
      setWhaleMovement({
        top: scroll * 0.1,
        left: scroll * 0.1,
        zAxis: scroll * 0.05,
        rotate: scroll * -1,
      });
      setBirdOneMovement({ yAxis: scroll * -0.2, xAxis: scroll * -0.2 });
      setBirdTwoMovement({ yAxis: scroll * -0.005, xAxis: scroll * -0.2 });
      setBirdThreeMovement({ yAxis: scroll * -0.3, xAxis: scroll * -0.2 });
      setBirdsSmallMovement({ yAxis: scroll * -0.005, xAxis: scroll * -0.2 });
      setBirdsLargeMovement({ yAxis: scroll * -0.005, xAxis: scroll * -0.1 });
      setPenguineOneMovement({ zAxis: scroll * 0.7 });
      setPenginTwoMovement({ zAxis: scroll * 0.3 });
      setPenguinThreeMovement({ zAxis: scroll * 0.1 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container id='hero'>
      <S.TitleBox className={dancingScript.className}>
        <S.Title>Imagination</S.Title>
        <S.Title>Into </S.Title>
        <S.Title>Reality</S.Title>
      </S.TitleBox>

      <S.Background
        $movement={backgroundMovement}
        src={background}
        width={1500}
        height={1000}
        alt='Hero Image'
      />
      <S.Whale
        $movement={whaleMovement}
        src={whale}
        width={1500}
        height={1500}
        alt='Hero Image'
      />
      <S.BirdOne
        $movement={birdOneMovement}
        src={bird1}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
      <S.BirdTwo
        $movement={birdTwoMovement}
        src={bird2}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
      <S.BirdThree
        $movement={birdThreeMovement}
        src={bird3}
        width={1500}
        height={1500}
        alt='Hero Image'
        layout='responsive'
      />
      <S.BirdsSmall
        $movement={birdsSmallMovement}
        src={birdsSmall}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
      <S.BirdsLarge
        $movement={birdsLargeMovement}
        src={birdsLarge}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
      <S.PenguinOne
        $movement={penguinOneMovement}
        src={penguin1}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
      <S.PenguinTwo
        $movement={penguinTwoMovement}
        src={penguin2}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
      <S.PenguinThree
        $movement={penguinThreeMovement}
        src={penguin3}
        width={1500}
        height={1000}
        alt='Hero Image'
        layout='responsive'
      />
    </S.Container>
  );
};
