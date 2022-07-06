import styled from 'styled-components';

import { SkeletonCard } from './SkeletonCard';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const SkeletonCards = () => (
  <Ul>
    {Array(20)
      .fill(0)
      .map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
  </Ul>
);
