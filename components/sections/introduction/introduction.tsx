import { ReactElement } from 'react';
import Image from 'next/image';

import { DeviceType, useWindowSize } from '../../../hooks/use-window-resize';
import ProfilePhoto from '../../../public/assets/seolhikim.png';
import Typography from '../../atomic/Typography/Typography';
import { Span } from '../../common/span.styles';
import * as S from './introduction.styles';

interface ImageSize {
  width: number;
  height: number;
}

export const Intorduction = (): ReactElement => {
  const { deviceType } = useWindowSize();
  const isMobile = deviceType === DeviceType.MOBILE;
  const isTablet = deviceType === DeviceType.TABLET;
  const isLaptop = deviceType === DeviceType.LAPTOP;

  const marginButtom = isMobile || isTablet ? '8rem' : '0';

  let imageSize: ImageSize;

  if (isMobile || isTablet) {
    imageSize = {
      width: 300,
      height: 370,
    };
  } else if (isLaptop) {
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
    <S.Container id='intro'>
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
          fontWeight='medium'
        >
          {`Hello! I'm`}
        </Typography>
        <Typography
          variant='headingM'
          margin={['none', 'none', 'lg', 'none']}
          fontWeight='medium'
        >
          Seol Hi Kim
        </Typography>
        <Typography variant='headingXS'>
          Frontend Developer ready to take over the world,
          <br /> one line of code at the time!
        </Typography>
        <Typography variant='textL' margin={['lg', 'none', 'none', 'none']}>
          I approach every project with
          <Span $fontWeight={600}> keen interest</Span> in processes and best
          practices. My focus is on delivering
          <Span $fontWeight={600}> excellent solutions</Span> on time, according
          to the project&apos;s priorities. Once a project is completed, my mind
          is always looking for ways to
          <Span $fontWeight={600}> improve myself</Span> and
          <Span $fontWeight={600}> future projects</Span>.
        </Typography>

        <S.Anchor href='/assets/Resume.pdf' download target='_blank'>
          Resume
          <S.Wave />
        </S.Anchor>
      </S.TextContainer>
    </S.Container>
  );
};
