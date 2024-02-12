import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';

import * as S from './title-box.styles';

interface TitleBoxProps {
  title: string;
  imgUrl?: string;
  bgColor?: string;
}

export const TitleBox = ({
  title,
  imgUrl,
  bgColor,
}: TitleBoxProps): ReactElement => {
  return (
    <S.Container $bgColor={bgColor}>
      {imgUrl && (
        <S.ImageContainer aria-hidden>
          <Image
            src={imgUrl}
            alt=''
            width={25}
            height={25}
            style={{ border: '0.2rem solid white', borderRadius: '50%' }}
          />
        </S.ImageContainer>
      )}
      <Typography variant='textL' color='white'>
        {title}
      </Typography>
    </S.Container>
  );
};
