import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

import { AnimatedContainer } from 'components/AnimatedContainer';
import S from './styled';

export default function NotFound() {
  return (
    <AnimatedContainer>
      <S.Wrapper>
        <S.Icon>
          <FontAwesomeIcon icon={faMugHot} />
        </S.Icon>
        <S.Text>Error 404: Page not found</S.Text>
      </S.Wrapper>
    </AnimatedContainer>
  );
}
