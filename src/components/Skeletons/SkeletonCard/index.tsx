import Skeleton from 'react-loading-skeleton';
import S from './styled';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonCard = () => (
  <S.Li>
    <S.Img>
      <Skeleton height='14vh' />
    </S.Img>
    <S.Title>
      <Skeleton height='3vh' />
    </S.Title>
  </S.Li>
);
