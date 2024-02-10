import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';

import { ChillyDogTabs } from '../tabs/tabs';

export const ChillyDogMain = (): ReactElement => {
  return (
    <Box width={'100%'} bgcolor={'white'}>
      {/* TODO: chilly dog image */}
      <ChillyDogTabs />
    </Box>
  );
};
