import { ReactElement } from 'react';
import Image from 'next/image';

import * as S from './about.styles';
import {
  DeviceType,
  useWindowSize,
} from '../../../../../../hooks/use-window-resize';
import { lilita } from '../../../../../../styles/Fonts';
import Typography from '../../../../../atomic/Typography/Typography';

export const AboutChillyDog = (): ReactElement => {
  const { deviceType } = useWindowSize();

  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src='/assets/logo.svg'
          alt='Logo'
          width={50}
          height={50}
          style={{ border: '0.2rem solid white', borderRadius: '50%' }}
        />
        <S.LogoText className={lilita.className}>Chilly Dog</S.LogoText>
      </S.ImageContainer>

      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        Simplifying Cold Weather Safety for Your Pet
      </Typography>
      <Typography variant='textM' margin={['lg', 'none', 'none']}>
        Chilly Dog is an intuitive application that presents real-time weather
        updates and offers personalized guidance on whether the weather
        conditions are suitable for a user&apos;s dog, taking into account the
        specific details from the dog&apos;s profile. Additionally, it showcases
        the progress of dog profiles being created. The application is designed
        with accessibility in mind, ensuring ease of use for all users.
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/mainpage.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={330}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Motivation for creating the application
      </Typography>

      <Typography variant='textM' margin={['lg', 'none']}>
        I own an adorable border collie named Cookie. During her first winter, I
        found myself frequently searching for information about the tolerance of
        dogs to cold weather and came across a helpful chart. Realizing the
        inconvenience of having to calculate this every time, I envisioned an
        app that could instantly inform dog owners of safe weather conditions
        for their pets. To facilitate this, users can create an account on my
        website and set up a profile for their dog. To make the process
        engaging, a graphic of a pooping dog shows progress, with just 6 simple
        questions to complete the profile. If you find this too extensive,
        there&apos;s no pressure - you can stop at any time and resume later
        without losing your progress.
      </Typography>

      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        A Guide to Calculation Method
      </Typography>
      <Typography
        variant='textM'
        fontWeight='bold'
        margin={['lg', 'none', 'md']}
      >
        Current Weather Information + ‘How Cold Is Too Cold’ chart + Dog Profile
      </Typography>
      <Typography variant='textM'>
        The application considers weather to be &apos;wet&apos; under the
        following conditions:
      </Typography>
      <Typography variant='textM'>
        rain, snow, drizzle, thunderstorms, or when the humidity exceeds 60%.
      </Typography>
      <S.ChartContainer $isMobile={isMobile}>
        <Image
          src='/assets/chilly-dog/chart.png'
          alt='Logo'
          layout='responsive'
          width={600}
          height={700}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ChartContainer>
    </S.Container>
  );
};
