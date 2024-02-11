import Image from 'next/image';
import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';

import { lilita } from '../../../../../../styles/Fonts';
import * as S from './stack.styles';
import { TurningBox } from '../../../../../atomic/turning-box/turning-box';

const tsUrl = '/assets/stack-logos/ts.svg';
const nextUrl = '/assets/stack-logos/next.svg';
const restUrl = '/assets/stack-logos/rest.png';
const styledlUrl = '/assets/stack-logos/styled.svg';
const accessibilitylUrl = '/assets/stack-logos/accessibility.svg';
const nestUrl = '/assets/stack-logos/nest.svg';
const mongodbUrl = '/assets/stack-logos/mongodb.svg';

export const StackChillyDog = (): ReactElement => {
  return (
    <S.Container>
      <S.StackContainer>
        <TurningBox imageUrl={tsUrl} title='Typescript' />
        <TurningBox imageUrl={nextUrl} title='Next' />
        <TurningBox imageUrl={styledlUrl} title='Styled Components' />
        <TurningBox imageUrl={accessibilitylUrl} title='Accessibility' />
        <TurningBox imageUrl={restUrl} title='REST API' />
        <TurningBox imageUrl={nestUrl} title='Nest' />
        <TurningBox imageUrl={mongodbUrl} title='MongoDB' />
      </S.StackContainer>
    </S.Container>
  );
};
