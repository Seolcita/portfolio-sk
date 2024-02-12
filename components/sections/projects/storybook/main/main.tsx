import { ReactElement } from 'react';
import { Box } from '@mui/material';

import { StorybookTabs } from '../tabs/tabs';

export const StorybookMain = (): ReactElement => {
  return (
    <Box width={'100%'} bgcolor={'white'}>
      {/* TODO: chilly dog image */}
      <StorybookTabs />
    </Box>
  );
};
