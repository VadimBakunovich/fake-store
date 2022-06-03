import { useEffect, useRef, useState } from 'react';

import { SkeletonCard } from 'components/Skeletons/SkeletonCard';
import { IProduct } from 'interfaces';
import S from './styled';

interface Props {
  product: IProduct;
}

export function Card({ product }: Props) {
  const img = new Image();
  img.src = product.image;

  const [isLoaded, setLoaded] = useState(img.complete);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && !isLoaded) {
      imgRef.current.onload = () => setLoaded(true);
    }
    return () => {
      if (imgRef.current) imgRef.current.onload = null;
    };
  }, []);

  return (
    <>
      <S.Li isLoaded={isLoaded}>
        <S.Link to={`/product/${product.id}`}>
          <S.Img ref={imgRef} src={product.image} alt='product image' />
          <S.Descr>{product.title}</S.Descr>
        </S.Link>
      </S.Li>
      {!isLoaded && <SkeletonCard />}
    </>
  );
}
