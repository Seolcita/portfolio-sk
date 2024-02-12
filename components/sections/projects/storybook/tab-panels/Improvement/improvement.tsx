import { ReactElement } from 'react';
import { Typography } from 'sk-storybook';

import * as S from '../challenges/challenges.styles';
import { TitleBox } from '../../../../../atomic/title-box/title-box';

export const ImprovementStorybook = (): ReactElement => {
  return (
    <S.Container>
      <S.TopicContainer>
        <TitleBox
          title='Optimizing Session Persistence for Dog Profile Creation'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          In the initial design of our dog profile creation process, the system
          was configured to send data to the backend after each question was
          answered by the user. This approach was aimed at ensuring that users
          could halt and resume the profile creation process without losing
          their progress. However, this method led to an excessive number of API
          calls, which not only put a strain on server resources but also
          potentially degraded the user experience due to increased latency. For
          future iterations, it would be beneficial to explore more efficient
          session persistence strategies. One potential method could involve
          caching the user's progress locally on the client side and only
          sending a comprehensive data packet to the backend upon completion of
          the profile creation or at certain checkpoints. This would
          significantly reduce the number of API calls, ensuring a smoother user
          experience and reducing server load.
        </Typography>
      </S.TopicContainer>

      <S.TopicContainer>
        <TitleBox
          title='Enhancing Accessibility through PWA Conversion'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          My interest in Progressive Web App (PWA) development stems from the
          desire to provide users with more accessible and engaging ways to
          interact with the web application. Converting the current web
          application into a PWA can significantly enhance user experience by
          offering offline capabilities, faster load times, and a
          mobile-app-like experience directly from their browser. This
          transformation would not only make the application more resilient to
          poor network conditions but also potentially increase user retention
          and engagement by leveraging the convenience and accessibility
          features that PWAs provide. Implementing PWA technology involves
          enabling service workers, adding a web app manifest, and ensuring the
          application meets core PWA criteria, such as responsiveness and
          cross-browser compatibility.
        </Typography>
      </S.TopicContainer>

      <S.TopicContainer>
        <TitleBox
          title='Leveraging Google Analytics for Enhanced User Insight'
          imgUrl='/assets/logo.svg'
        />
        <Typography variant='textM'>
          The integration of Google Analytics into the web application is a
          strategic move to deepen our understanding of user behavior and
          engagement across the platform. By implementing Google Analytics, we
          can gather valuable data on how users interact with the application,
          such as which features are most used, the average duration of a visit,
          and the user flow through the dog profile creation process. This data
          is instrumental in identifying areas where users may encounter
          difficulties or lose interest, enabling us to make informed decisions
          on design and functionality improvements. Moreover, understanding user
          demographics and behavior patterns can guide the development of
          targeted enhancements and marketing strategies, ultimately leading to
          a more engaging and user-friendly application.
        </Typography>
      </S.TopicContainer>
    </S.Container>
  );
};
