import { ReactElement } from 'react';

import { ContactInfo } from './contact-info';
import { ContactForm } from './contact-form';
import * as S from './contact.styles';
import Typography from '../../atomic/Typography/Typography';

export const Contact = (): ReactElement => {
  return (
    <S.Container id='contact'>
      <Typography variant='headingL' fontWeight='medium'>
        Let's get in touch!
      </Typography>
      <ContactInfo />
      <ContactForm />
    </S.Container>
  );
};
