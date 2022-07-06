import { About } from 'components/AppModal/About';
import { useStore } from 'store';
import S from './styled';

export default function Footer() {
  const { toggleModalOpen } = useStore();

  const handleClick = () => toggleModalOpen(<About />);

  return (
    <S.Footer>
      <S.Btn onClick={handleClick}>About</S.Btn>
      <span>{new Date().getFullYear()}</span>
      <a
        href='https://fakestoreapi.com'
        target='_blank'
        rel='noopener noreferer'
      >
        Fake Store API homepage
      </a>
    </S.Footer>
  );
}
