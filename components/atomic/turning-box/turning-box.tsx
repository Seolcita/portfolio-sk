import { ReactElement } from 'react';

import * as S from './turning-box.styles';
import { Typography } from 'sk-storybook';

interface TurningBoxProps {
  imageUrl: string;
  title: string;
  borderRadius?: number;
}

export const TurningBox = ({
  imageUrl,
  title,
  borderRadius,
}: TurningBoxProps): ReactElement => {
  return (
    <S.Container $borderRadius={borderRadius}>
      <S.Front $bgImageUrl={imageUrl}></S.Front>
      <S.Back $bgImageUrl={imageUrl}>
        <S.Inner>
          <Typography variant='textS' fontWeight='bold'>
            {title}
          </Typography>
        </S.Inner>
      </S.Back>
    </S.Container>
  );
};