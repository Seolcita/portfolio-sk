import { ReactElement, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { a11yProps } from '../../../../atomic/tab-panel/a11yProps';
import { TabPanel } from '../../../../atomic/tab-panel/tab-panel';

export const StorybookTabs = (): ReactElement => {
  const [value, setValue] = useState(0);

  const customTabStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'crimson',
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={'100%'}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='basic tabs example'
        >
          <Tab label='About' {...a11yProps(0)} sx={customTabStyle} />
          <Tab label='Planning' {...a11yProps(1)} sx={customTabStyle} />
          <Tab label='Tasks' {...a11yProps(2)} sx={customTabStyle} />
          <Tab label='Challenges' {...a11yProps(3)} sx={customTabStyle} />
          <Tab label='Improvment' {...a11yProps(4)} sx={customTabStyle} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        About
      </TabPanel>
      <TabPanel value={value} index={1}>
        Planning
      </TabPanel>
      <TabPanel value={value} index={2}>
        tickets
      </TabPanel>
      <TabPanel value={value} index={3}>
        Challenges
      </TabPanel>
      <TabPanel value={value} index={4}>
        Improvement
      </TabPanel>
    </Box>
  );
};
