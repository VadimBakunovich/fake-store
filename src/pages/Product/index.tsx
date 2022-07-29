import { useState, useRef } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { useStore } from 'store';
import api from 'api';
import IProduct from 'interfaces';
import S from './styled';
import { RectBtn } from 'components/Buttons/RectBtn';
import { LinkBtn } from 'components/Buttons/LinkBtn';

export default function Product() {
  const [isVisible, setIsVisible] = useState(false);
  const isAdded = useRef(false);

  const { cart, addToCart } = useStore();

  const { id = '' } = useParams();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery(
    ['product', id],
    () => api.fetchProductById(id),
    {
      initialData: () =>
        queryClient
          .getQueryData<IProduct[]>('allProducts')
          ?.find(product => product.id === +id),
    }
  );

  function handleAddToCart() {
    if (cart.some(item => item.id === data?.id)) isAdded.current = true;
    else addToCart(data!);

    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
  }

  const handleClick = () => navigate(-1);

  if (isError) return <h3>Oops, something went wrong...</h3>;
  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      <S.RoundBtn onClick={handleClick} title='go back'>
        &#8617;
      </S.RoundBtn>

      <S.Container>
        <S.Wrapper>
          <S.Category>{data?.category}</S.Category>
          <S.Title>{data?.title}</S.Title>
          <p>{data?.description}</p>
          <S.Price>$ {data?.price}</S.Price>

          <S.BtnWrapper>
            <RectBtn onClick={handleAddToCart}>Add to Cart</RectBtn>
            {!!cart.length && <LinkBtn to='/cart'>Go to Cart</LinkBtn>}
          </S.BtnWrapper>

          <S.Confirmation isVisible={isVisible}>
            {!isAdded.current && 'Product successfully added to cart.'}
            {isAdded.current && 'The product was added to the cart earlier.'}
          </S.Confirmation>
        </S.Wrapper>

        <S.Img src={data?.image} alt='product image' />
      </S.Container>
    </>
  );
}
