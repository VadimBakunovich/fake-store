import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { useStore } from 'store';

export default function Cart() {
  const cart = useStore(state => state.cart);

  return (
    <NavLink to='cart'>
      <FontAwesomeIcon icon={faCartShopping} /> ( {cart.length} )
    </NavLink>
  );
}
