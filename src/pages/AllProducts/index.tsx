import { useQuery } from 'react-query';

import api from 'api';
import { Cards } from 'components/Cards';
import { SkeletonCards } from 'components/Skeletons/SkeletonCards';

export default function AllProducts() {
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery('allProducts', api.fetchAllProducts);

  if (isError) return <h3>Oops, something went wrong...</h3>;
  if (isLoading) return <SkeletonCards />;

  return <Cards data={data} />;
}
