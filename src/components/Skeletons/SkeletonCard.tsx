import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Li = styled.li`
  width: 20%;
  padding: 20px;
`;

const Img = styled(Skeleton)`
  display: block;
  margin: 0 auto;
  width: 60%;
  height: 14vh;
`;

const Title = styled(Skeleton)`
  width: 100%;
  height: 3vh;
`;

export const SkeletonCard = () => (
  <Li>
    <Img />
    <Title />
  </Li>
);
