import { ReactElement, SyntheticEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import { AboutStorybook } from '../tab-panels/about/about';
import { SprintsStorybook } from '../tab-panels/sprints/sprints';
import { TabPanel } from '../../../../atomic/tab-panel/tab-panel';
import { a11yProps } from '../../../../atomic/tab-panel/a11yProps';
import { PlanningStorybook } from '../tab-panels/planning/planning';
import { ChallengesStorybook } from '../tab-panels/challenges/challenges';
import { ImprovementStorybook } from '../tab-panels/Improvement/improvement';
import { StackStorybook } from '../tab-panels/stack/stack';
import { LinksStorybook } from '../tab-panels/links/links';

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
          scrollButtons
          allowScrollButtonsMobile
          aria-label='storybook tabs'
        >
          <Tab label='About' {...a11yProps(0)} sx={customTabStyle} />
          <Tab label='Stack' {...a11yProps(1)} sx={customTabStyle} />
          <Tab label='Planning' {...a11yProps(2)} sx={customTabStyle} />
          <Tab label='Tasks' {...a11yProps(3)} sx={customTabStyle} />
          <Tab label='Challenges' {...a11yProps(4)} sx={customTabStyle} />
          <Tab label='Improvment' {...a11yProps(5)} sx={customTabStyle} />
          <Tab label='Links' {...a11yProps(6)} sx={customTabStyle} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AboutStorybook />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StackStorybook />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PlanningStorybook />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SprintsStorybook />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ChallengesStorybook />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ImprovementStorybook />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <LinksStorybook />
      </TabPanel>
    </Box>
  );
};
