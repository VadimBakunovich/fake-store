import { useEffect, useState } from 'react';

import { SkeletonCard } from 'components/Skeletons/SkeletonCard';
import IProduct from 'interfaces';
import S from './styled';

interface Props {
  product: IProduct;
}

export function Card({ product }: Props) {
  const [isLoaded, setLoaded] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.decode().then(() => setLoaded(true));
  }, []);

  return isLoaded ? (
    <S.Li>
      <S.Link to={`/product/${product.id}`}>
        <S.Img src={product.image} alt='product image' />
        <S.Descr>{product.title}</S.Descr>
      </S.Link>
    </S.Li>
  ) : (
    <SkeletonCard />
  );
}
