import { ReactElement } from 'react';
import { Button, TextField } from '@mui/material';

import * as S from './contact.styles';

export const ContactForm = (): ReactElement => {
  return (
    <S.RightContainer>
      <S.Card>
        <S.Form
          action='https://formsubmit.co/seolhikimdev@gmail.com'
          method='POST'
        >
          <TextField
            id='name'
            label='Name'
            variant='outlined'
            fullWidth
            margin='normal'
            sx={{
              width: '100%',
            }}
          />

          <TextField
            id='email'
            label='Email'
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <TextField
            id='message'
            label='Message'
            variant='outlined'
            fullWidth
            multiline
            rows={4}
            margin='normal'
          />

          <Button type='submit' variant='contained' sx={{ marginTop: '2rem' }}>
            Send
          </Button>
        </S.Form>
      </S.Card>
    </S.RightContainer>
  );
};
