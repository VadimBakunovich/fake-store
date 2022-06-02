import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

type Props = {
  isVisible: boolean;
  handleClick?: () => void;
};

const Btn = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  color: ${(props: Props) => (props.isVisible ? 'unset' : '#c4c4c4')};
  background-color: unset;
  :hover {
    filter: unset;
  }
`;

export const EyeBtn = ({ isVisible, handleClick }: Props) => (
  <Btn
    type='button'
    isVisible={isVisible}
    onClick={handleClick}
    title='password show/hide'
  >
    <FontAwesomeIcon icon={faEye} />
  </Btn>
);
