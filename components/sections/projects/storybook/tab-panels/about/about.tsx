import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { lilita } from '../../../../../../styles/Fonts';
import * as S from './about.styles';
import {
  DeviceType,
  useWindowSize,
} from '../../../../../../hooks/use-window-resize';
import { Box, Button, IconButton } from '@mui/material';

export const AboutStorybook = (): ReactElement => {
  const { deviceType } = useWindowSize();

  const isMobile = deviceType === DeviceType.MOBILE;

  return (
    <S.Container>
      <S.ImageContainer>
        <Image
          src='/assets/stack-logos/storybook.png'
          alt='Logo'
          width={50}
          height={50}
          style={{ border: '0.2rem solid white', borderRadius: '50%' }}
        />
        <S.LogoText className={lilita.className}>SK-Storybook</S.LogoText>
      </S.ImageContainer>

      {/* Project Short Description */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['lg', 'none', 'none']}
      >
        React Component Library with Storybook
      </Typography>
      <Typography variant='textM' margin={['lg', 'none', 'none']}>
        My React component library, enhanced with Storybook, is a curated
        collection designed to accelerate and simplify the development of web
        applications. It features a wide array of customizable, reusable
        components, each meticulously documented and showcased within Storybook
        for ease of use.
      </Typography>
      <S.ImageContainer>
        <Image
          src='/assets/storybook/storybook.png'
          alt='Logo'
          layout='responsive'
          width={700}
          height={330}
          style={{ borderRadius: '0.5rem' }}
        />
      </S.ImageContainer>

      {/* Accessibility */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Accessibility Focus
      </Typography>
      <Typography variant='textM' margin={['lg', 'none']}>
        Committed to making components as accessible as possible, each component
        in the library is designed and built with accessibility at its core,
        adhering to the best practices and standards. This dedication ensures
        that our components meet the needs of a diverse range of users,
        fostering inclusivity and enhancing user experience across web
        applications.
      </Typography>

      {/* Documentation */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Component Documentation
      </Typography>
      <Typography variant='textM' margin={['lg', 'none']}>
        Detailed documentation for each component is available in the Storybook,
        including usage examples and prop definitions for each component.
        Additionally, interactive demos allow developers to see and experiment
        with the components in real-time, facilitating a deeper understanding
        and easier integration into projects.
      </Typography>

      {/* Installation */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Install Package
      </Typography>
      <S.ClipboardContainer>
        <Box marginRight={'2rem'}>
          <pre>
            <code>npm install sk-storybook</code>
          </pre>
        </Box>
        <IconButton
          aria-label='delete'
          onClick={() =>
            navigator.clipboard.writeText('npm install sk-storybook')
          }
        >
          <ContentCopyIcon />
        </IconButton>
      </S.ClipboardContainer>

      {/* Type Definitions */}
      <Typography
        variant='headingXS'
        fontWeight='bold'
        margin={['xl', 'none', 'none']}
      >
        Type Definitions
      </Typography>
      <Typography variant='textM' margin={['lg', 'none']}>
        This package contains type definitions.
      </Typography>
    </S.Container>
  );
};
