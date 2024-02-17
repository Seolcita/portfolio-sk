import { ReactElement } from 'react';
import Image from 'next/image';

import * as S from './flows.styles';
import {
  DeviceType,
  useWindowSize,
} from '../../../../../../hooks/use-window-resize';
import Typography from '../../../../../atomic/Typography/Typography';

export const FlowChillyDog = (): ReactElement => {
  const { deviceType } = useWindowSize();
  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <S.Container>
      <Typography
        variant={isMobile ? 'headingXS' : 'headingS'}
        fontWeight='bold'
        margin={['lg', 'none']}
      >
        Creating First Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/createFlow.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem', marginBottom: '5rem' }}
        />
      </S.ImageContainer>

      <Typography
        variant={isMobile ? 'headingXS' : 'headingS'}
        fontWeight='bold'
        margin={['lg', 'none']}
      >
        Resuming Creating Dog Profile
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/chilly-dog/resume.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={250}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>
    </S.Container>
  );
};
