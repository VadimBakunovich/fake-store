import { AnimatedContainer } from 'components/AnimatedContainer';
import { SkeletonCard } from '../SkeletonCard';
import Ul from './styled';

export const SkeletonCards = () => (
  <AnimatedContainer>
    <Ul>
      {Array(20)
        .fill(0)
        .map((i, idx) => (
          <SkeletonCard key={idx} />
        ))}
    </Ul>
  </AnimatedContainer>
);
