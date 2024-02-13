import { ReactElement } from 'react';

import * as S from './stack.styles';
import { TurningBox } from '../../../../../atomic/turning-box/turning-box';

const tsUrl = '/assets/stack-logos/ts.svg';
const reactUrl = '/assets/stack-logos/react.png';
const storybookUrl = '/assets/stack-logos/storybook.png';
const styledlUrl = '/assets/stack-logos/styled.svg';
const accessibilitylUrl = '/assets/stack-logos/accessibility.svg';

export const StackStorybook = (): ReactElement => {
  return (
    <S.Container>
      <S.StackContainer>
        <TurningBox imageUrl={tsUrl} title='Typescript' />
        <TurningBox imageUrl={reactUrl} title='React' />
        <TurningBox imageUrl={storybookUrl} title='Storybook' />
        <TurningBox imageUrl={styledlUrl} title='Styled Components' />
        <TurningBox imageUrl={accessibilitylUrl} title='Accessibility' />
      </S.StackContainer>
    </S.Container>
  );
};
