import { ReactElement } from 'react';
import { Button, TextField } from '@mui/material';

import * as S from './contact.styles';
import Typography from '../../atomic/Typography/Typography';

export const ContactForm = (): ReactElement => {
  return (
    <>
      <Typography variant='headingXS' fontWeight='medium'>
        Send me a message!
      </Typography>
      <S.FormContainer>
        <form
          action='https://formsubmit.co/seolhikimdev@gmail.com'
          method='POST'
        >
          <input
            type='hidden'
            name='_next'
            value='http://localhost:3000/thanks' // Change this to my own URL
          />
          <TextField
            id='name'
            label='Name'
            fullWidth
            margin='normal'
            sx={{
              width: '100%',
            }}
            variant='filled'
          />

          <TextField
            id='email'
            label='Email'
            fullWidth
            margin='normal'
            variant='filled'
          />
          <TextField
            id='message'
            label='Message'
            fullWidth
            multiline
            rows={4}
            margin='normal'
            variant='filled'
          />

          <S.Button type='submit'>Send</S.Button>
        </form>
      </S.FormContainer>
    </>
  );
};
