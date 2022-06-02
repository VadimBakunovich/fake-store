import { IProduct } from 'interfaces';
import S from './styled';

interface Props {
  product: IProduct;
}

export const Card = ({ product }: Props) => (
  <S.Li>
    <S.Link to={`/product/${product.id}`}>
      <S.Img src={product.image} alt='product image' />
      <S.Descr>{product.title}</S.Descr>
    </S.Link>
  </S.Li>
);
