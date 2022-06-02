import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Container from './styled';

export const SkeletonNavBar = () => (
  <Container>
    <Skeleton width={140} height='1.1vh' />
    <Skeleton width={130} height='1.1vh' />
    <Skeleton width={100} height='1.1vh' />
    <Skeleton width={165} height='1.1vh' />
    <Skeleton width={200} height='1.1vh' />
  </Container>
);
