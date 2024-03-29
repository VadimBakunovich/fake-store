import CartItem from 'components/CartItem';
import { LinkBtn } from 'components/Buttons/LinkBtn';
import { useStore } from 'store';
import S from './styled';

export default function CartPage() {
  const { cart } = useStore();

  function getPrettyPrice() {
    const total = cart.reduce((sum, i) => sum + i.price * (i?.number || 1), 0);
    return Number.isInteger(total) ? total : total.toFixed(2);
  }

  return cart.length ? (
    <>
      <ul>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <S.Wrapper>
        <S.Total>Total: $ {getPrettyPrice()}</S.Total>
        <LinkBtn to='/checkout' state={{ to: '/checkout' }}>
          Proceed to Checkout
        </LinkBtn>
      </S.Wrapper>
    </>
  ) : (
    <h2>Your cart is empty</h2>
  );
}
