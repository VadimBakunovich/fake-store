import { NavLink } from 'react-router-dom';

interface Props {
  category: string;
}

export const Tab = ({ category }: Props) => (
  <li>
    <NavLink to={`category/${category.replace(' ', '_')}`}>{category}</NavLink>
  </li>
);
