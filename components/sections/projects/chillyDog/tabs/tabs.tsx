import { ReactElement, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import { TabPanel } from '../../../../atomic/tab-panel/tab-panel';
import { a11yProps } from '../../../../atomic/tab-panel/a11yProps';
import { About } from '../../../about/about';
import { AboutChillyDog } from '../tab-panels/about/about';

export const ChillyDogTabs = (): ReactElement => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={'100%'}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='About' {...a11yProps(0)} />
          <Tab label='Stack' {...a11yProps(1)} />
          <Tab label='Planning' {...a11yProps(2)} />
          <Tab label='Sprints & Tasks' {...a11yProps(3)} />
          <Tab label='Use Case' {...a11yProps(4)} />
          <Tab label='Flow Chart' {...a11yProps(5)} />
          <Tab label='Accessibility' {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AboutChillyDog />
      </TabPanel>
    </Box>
  );
};
