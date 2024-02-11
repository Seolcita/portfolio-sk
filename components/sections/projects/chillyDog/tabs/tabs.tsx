import { ReactElement, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import { PlanningChillyDog } from '../tab-panels/planning/planning';
import { a11yProps } from '../../../../atomic/tab-panel/a11yProps';
import { TabPanel } from '../../../../atomic/tab-panel/tab-panel';
import { AboutChillyDog } from '../tab-panels/about/about';
import { SprintsChillyDog } from '../tab-panels/sprints/sprints';
import { FlowChillyDog } from '../tab-panels/flows/flows';
import { UseCaseChillyDog } from '../tab-panels/usecase/usecase';

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
      <TabPanel value={value} index={2}>
        <PlanningChillyDog />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SprintsChillyDog />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <UseCaseChillyDog />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <FlowChillyDog />
      </TabPanel>
    </Box>
  );
};
