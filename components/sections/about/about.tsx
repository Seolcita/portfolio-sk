import { ReactElement } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

import { DeviceType, useWindowSize } from '../../../hooks/use-window-resize';
import ProfilePhoto from '../../../public/assets/seolhikim.png';
import { Typography, Button } from 'sk-storybook';
import { Span } from '../../common/span.styles';
import * as S from './about.styles';

interface ImageSize {
  width: number;
  height: number;
}

export const About = (): ReactElement => {
  const { deviceType } = useWindowSize();

  const isMobile = deviceType === DeviceType.MOBILE;
  const isTablet = deviceType === DeviceType.TABLET;
  const isLaptop = deviceType === DeviceType.LAPTOP;

  const marginButtom = isMobile || isTablet ? '8rem' : '0';

  let imageSize: ImageSize;

  if (isMobile) {
    imageSize = {
      width: 330,
      height: 400,
    };
  }
  if (isTablet) {
    imageSize = {
      width: 300,
      height: 450,
    };
  }
  if (isLaptop) {
    imageSize = {
      width: 310,
      height: 380,
    };
  } else {
    imageSize = {
      width: 330,
      height: 400,
    };
  }

  return (
    <S.Container>
      <Image
        src={ProfilePhoto}
        alt='Seol Hi portfolio image'
        width={imageSize.width}
        height={imageSize.height}
        style={{
          borderRadius: '1.5rem',
          marginBottom: marginButtom,
        }}
      />
      <S.TextContainer>
        <Typography
          variant='textM'
          margin={['none', 'none', 'lg', 'none']}
          fontWeight='bold'
        >
          Hello! I'm
        </Typography>
        <Typography
          variant='headingM'
          margin={['none', 'none', 'lg', 'none']}
          fontWeight='bold'
        >
          Seol Hi Kim
        </Typography>
        <Typography variant='headingXS'>
          Frontend Developer ready to take over the world,
          <br /> one line of code at the time!
        </Typography>
        <Typography variant='textL' margin={['lg', 'none', 'none', 'none']}>
          I approach every project with
          <Span $fontWeight={700}> keen interest</Span> to processes and best
          practices. My focus is delivering
          <Span $fontWeight={700}> excellent solutions</Span> on time, according
          to the project priorities. Once a project is done, my mind is always
          looking for ways to <Span $fontWeight={700}> improve myself</Span> and
          <Span $fontWeight={700}> next projects</Span>.
        </Typography>

        {/* TODO: Add resume link, change button style */}
        <Box width={'15rem'} marginTop='3rem'>
          <Button
            textColor='white'
            size='m'
            ariaLabel='Resume button'
            bgColor='black'
            fullWidth
          >
            Resume
          </Button>
        </Box>
      </S.TextContainer>
    </S.Container>
  );
};
