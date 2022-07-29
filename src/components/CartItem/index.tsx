import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { useStore } from 'store';
import IProduct from 'interfaces';
import S from './styled';

interface Props {
  item: IProduct;
}

export default function CartItem({ item }: Props) {
  const { delFromCart, increaseNumber, decreaseNumber } = useStore();

  const handleSubtract = () => item.number! > 1 && decreaseNumber(item.id);

  const handleAdd = () => increaseNumber(item.id);

  const handleRemove = () => delFromCart(item.id);

  function getPrettyPrice({ number = 1, price }: IProduct) {
    const total = number * price;
    return Number.isInteger(total) ? total : total.toFixed(2);
  }

  return (
    <S.Li>
      <S.Link to={`/product/${item.id}`} title='go to product details'>
        <S.Img src={item.image} alt='product image' />
      </S.Link>

      <S.Title>{item.title}</S.Title>

      <S.BtnWrapper>
        <S.RoundBtn onClick={handleSubtract}>
          <FontAwesomeIcon icon={faMinus} />
        </S.RoundBtn>

        <S.ItemNumber>{item.number || 1}</S.ItemNumber>

        <S.RoundBtn onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </S.RoundBtn>
      </S.BtnWrapper>

      <S.Price>$ {getPrettyPrice(item)}</S.Price>

      <S.RoundBtn onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrashCan} />
      </S.RoundBtn>
    </S.Li>
  );
}
