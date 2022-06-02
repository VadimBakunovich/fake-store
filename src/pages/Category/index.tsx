import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

import api from 'api';
import { Cards } from 'components/Cards';
import { SkeletonCards } from 'components/Skeletons/SkeletonCards';
import { IProduct } from 'interfaces';

export default function Category() {
  const { category } = useParams();

  const categoryR = category?.replace('_', ' ');

  const queryClient = useQueryClient();
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery(
    ['category', category],
    () => api.fetchProductsByCategory(`${categoryR}`),
    {
      initialData: () =>
        queryClient
          .getQueryData<IProduct[]>('allProducts')
          ?.filter(({ category }) => category === categoryR),
    }
  );

  if (isError) return <h3>Oops, something went wrong...</h3>;
  if (isLoading) return <SkeletonCards />;

  return <Cards data={data} />;
}
