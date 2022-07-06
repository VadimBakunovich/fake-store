import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

import api from 'api';
import { LinkBtn } from 'components/Buttons/LinkBtn';
import S from './styled';

export default function HomePage() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery('allProducts', api.fetchAllProducts);
  }, []);

  return (
    <S.Wrapper>
      <S.TxtBlock>
        <S.Heading>Fake Store</S.Heading>
        <S.Descr>The best place for shopping in the whole world :)</S.Descr>
        <LinkBtn to='/all'>Go Shopping</LinkBtn>
      </S.TxtBlock>
      <S.Image />
    </S.Wrapper>
  );
}
