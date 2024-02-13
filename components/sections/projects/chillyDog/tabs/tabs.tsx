import { ReactElement, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import { PlanningChillyDog } from '../tab-panels/planning/planning';
import { a11yProps } from '../../../../atomic/tab-panel/a11yProps';
import { TabPanel } from '../../../../atomic/tab-panel/tab-panel';
import { AboutChillyDog } from '../tab-panels/about/about';
import { SprintsChillyDog } from '../tab-panels/sprints/sprints';
import { FlowChillyDog } from '../tab-panels/flows/flows';
import { UseCaseChillyDog } from '../tab-panels/usecase/usecase';
import { AccessibilityChillyDog } from '../tab-panels/accessibility/accessibility';
import { ChallengesChillyDog } from '../tab-panels/challenges/challenges';
import { ImprovementChillyDog } from '../tab-panels/Improvement/improvement';
import { StackChillyDog } from '../tab-panels/stack/stack';

export const ChillyDogTabs = (): ReactElement => {
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
          <Tab label='Stack' {...a11yProps(1)} sx={customTabStyle} />
          <Tab label='Planning' {...a11yProps(2)} sx={customTabStyle} />
          <Tab label='Sprints & Tasks' {...a11yProps(3)} sx={customTabStyle} />
          <Tab label='Use Case' {...a11yProps(4)} sx={customTabStyle} />
          <Tab label='Flow Chart' {...a11yProps(5)} sx={customTabStyle} />
          <Tab label='Accessibility' {...a11yProps(6)} sx={customTabStyle} />
          <Tab label='Challenges' {...a11yProps(7)} sx={customTabStyle} />
          <Tab label='Improvement' {...a11yProps(8)} sx={customTabStyle} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AboutChillyDog />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StackChillyDog />
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
      <TabPanel value={value} index={6}>
        <AccessibilityChillyDog />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ChallengesChillyDog />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <ImprovementChillyDog />
      </TabPanel>
    </Box>
  );
};
