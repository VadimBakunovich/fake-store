import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

import Cart from './Cart';
import NavBar from './NavBar';
import Registration from './Registration';
import S from './styled';

export const Header = () => (
  <S.Header>
    <S.Container>
      <S.Link to='/' aria-label='Link to the homepage'>
        <FontAwesomeIcon icon={faShop} />
      </S.Link>
      <S.Nav>
        <NavBar />
      </S.Nav>
      <Cart />
      <Registration />
    </S.Container>
  </S.Header>
);
