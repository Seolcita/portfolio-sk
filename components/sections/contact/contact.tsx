import { ReactElement } from 'react';

import * as S from './contact.styles';
import { ContactInfo } from './contact-info';
import Typography from '../../atomic/Typography/Typography';

export const Contact = (): ReactElement => {
  return (
    <S.Container id='contact'>
      <Typography variant='headingL' fontWeight='medium'>
        {`Let's get in touch!`}
      </Typography>
      <ContactInfo />
    </S.Container>
  );
};
