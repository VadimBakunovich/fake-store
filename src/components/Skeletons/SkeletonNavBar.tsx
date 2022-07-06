import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SkeletonNavBar = () => (
  <Container>
    {[140, 130, 100, 165, 200].map((width, idx) => (
      <Skeleton key={idx} width={width} height='1.1vh' />
    ))}
  </Container>
);
