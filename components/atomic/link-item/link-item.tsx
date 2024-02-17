import { ReactElement } from 'react';

import * as S from './link-item.styles';
import Image from 'next/image';
import Typography from '../Typography/Typography';

interface LinkItemProps {
  href: string;
  imageUrl: string;
  title: string;
  width?: number;
  height?: number;
}

export const LinkItem = ({
  href,
  imageUrl,
  title,
  width = 25,
  height = 25,
}: LinkItemProps): ReactElement => {
  return (
    <a href={href} target='_blank'>
      <S.LinkItem>
        <Image
          src={imageUrl}
          alt={title}
          width={width}
          height={height}
          style={{
            borderRadius: '50%',
          }}
        />
        <Typography
          variant='textM'
          fontWeight='bold'
          margin={['none', 'none', 'none', 'md']}
        >
          {title}
        </Typography>
      </S.LinkItem>
    </a>
  );
};
