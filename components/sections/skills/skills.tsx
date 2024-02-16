import { ReactElement, useEffect, useState } from 'react';

import * as S from './skills.styles';
import { Typography } from 'sk-storybook';
import { TurningBox } from '../../atomic/turning-box/turning-box';
import { MoveImageProps } from '../hero/hero';
import { json } from 'stream/consumers';

const jsUrl = '/assets/stack-logos/js.svg';
const tsUrl = '/assets/stack-logos/ts.svg';
const reactUrl = '/assets/stack-logos/react.png';
const nextUrl = '/assets/stack-logos/next.svg';
const restUrl = '/assets/stack-logos/rest.png';
const graphqlUrl = '/assets/stack-logos/graphql.png';
const styledlUrl = '/assets/stack-logos/styled.svg';
const accessibilitylUrl = '/assets/stack-logos/accessibility.svg';
const storybooklUrl = '/assets/stack-logos/storybook.png';
const expressUrl = '/assets/stack-logos/express.svg';
const nestUrl = '/assets/stack-logos/nest.svg';
const mongodbUrl = '/assets/stack-logos/mongodb.svg';
const bird2 = '/assets/parallax/bird2.png';
const bird3 = '/assets/parallax/bird3.png';
const whale = '/assets/parallax/whale.png';

export const MainSkills = (): ReactElement => {
  const [whaleMovement, setWhaleMovement] = useState<MoveImageProps>();
  const [birdTwoMovement, setBirdTwoMovement] = useState<MoveImageProps>();
  const [birdThreeMovement, setBirdThreeMovement] = useState<MoveImageProps>();

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.ceil(window.scrollY);

      setBirdTwoMovement({
        zAxis: scroll * 0.01,
      });
      setBirdThreeMovement({
        xAxis: scroll * -0.02,
        yAxis: scroll * 0.025,
        zAxis: scroll * 0.01,
      });
      setWhaleMovement({
        xAxis: scroll * 0.035,
        yAxis: scroll * 0.03,
        rotate: scroll * 0.025,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [birdTwoMovement]);

  return (
    <S.Container>
      <S.BirdTwo
        $movement={birdTwoMovement}
        src={bird2}
        width={500}
        height={500}
        alt='Hero Image'
        layout='responsive'
      />
      <S.BirdThree
        $movement={birdThreeMovement}
        src={bird3}
        width={300}
        height={300}
        alt='Hero Image'
        layout='responsive'
      />
      <S.Whale
        $movement={whaleMovement}
        src={whale}
        width={600}
        height={400}
        alt='Hero Image'
        layout='responsive'
      />
      <Typography variant='headingM' fontWeight='bold'>
        Skills
      </Typography>

      <S.MainSkillsContainer>
        <TurningBox imageUrl={jsUrl} title='Javascript' />
        <TurningBox imageUrl={tsUrl} title='Typescript' />
        <TurningBox imageUrl={reactUrl} title='React' />
        <TurningBox imageUrl={nextUrl} title='Next' />
        <TurningBox imageUrl={restUrl} title='REST API' />
        <TurningBox imageUrl={graphqlUrl} title='GraphQL' />
        <TurningBox imageUrl={styledlUrl} title='Styled Components' />
        <TurningBox imageUrl={accessibilitylUrl} title='Accessibility' />
        <TurningBox imageUrl={storybooklUrl} title='Storybook' />
        <TurningBox imageUrl={expressUrl} title='Express' />
        <TurningBox imageUrl={nestUrl} title='Nest' />
        <TurningBox imageUrl={mongodbUrl} title='MongoDB' />
      </S.MainSkillsContainer>
    </S.Container>
  );
};
