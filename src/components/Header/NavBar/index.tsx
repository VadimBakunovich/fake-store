import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';

import api from 'api';
import { Tab } from './Tab';
import { SkeletonNavBar } from 'components/Skeletons/SkeletonNavBar';
import Ul from './styled';

export default function NavBar() {
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery('categories', api.fetchCategories);

  if (isError) return <h3>Oops, something went wrong...</h3>;
  if (isLoading) return <SkeletonNavBar />;

  return (
    <Ul>
      <li>
        <NavLink to='all'>All Products</NavLink>
      </li>
      {data.map((category, idx) => (
        <Tab key={idx} category={category} />
      ))}
    </Ul>
  );
}
