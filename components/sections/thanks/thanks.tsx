'use client';

import { ReactElement } from 'react';

import * as S from './thanks.styles';
import Typography from '../../atomic/Typography/Typography';
import { Button } from 'sk-storybook';
import Image from 'next/image';
import { DeviceType, useWindowSize } from '../../../hooks/use-window-resize';

export const Thanks = (): ReactElement => {
  const { deviceType } = useWindowSize();
  const isMobile = deviceType === DeviceType.MOBILE;

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <S.Container>
      <S.Contents>
        <Image
          src='/assets/temp.png'
          alt='Thanks'
          width={isMobile ? 100 : 150}
          height={isMobile ? 100 : 150}
          style={{
            border: 'solid 2px white',
            borderRadius: '50%',
            marginRight: isMobile ? 0 : '5rem',
            marginBottom: isMobile ? '2rem' : 0,
          }}
        />
        <S.TextContainer>
          <Typography
            variant={isMobile ? 'headingXS' : 'headingS'}
            color='white'
          >
            Thanks for reaching out!
          </Typography>
          <Typography variant='headingXS' color='white' margin={['md', 'none']}>
            I will get back to you as soon as possible.
          </Typography>
          <Button
            size='l'
            ariaLabel='Back to main page'
            textColor='black'
            bgColor='white'
            hasShadow={false}
            margin={
              isMobile
                ? ['xl', 'none', 'none', 'none']
                : ['lg', 'none', 'none', 'none']
            }
            borderRadius={5}
            onClick={handleClick}
          >
            Back to main page
          </Button>
        </S.TextContainer>
      </S.Contents>
    </S.Container>
  );
};
