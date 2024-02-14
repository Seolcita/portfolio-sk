import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';

import { ContactInfo } from './contact-info';
import { ContactForm } from './contact-form';
import * as S from './contact.styles';

export const Contact = (): ReactElement => {
  return (
    <S.Container>
      <Typography variant='headingM' fontWeight='bold'>
        Contact
      </Typography>
      <S.Contents>
        <ContactInfo />
        <ContactForm />
      </S.Contents>
    </S.Container>
  );
};
