import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = { isLoaded: boolean };

export default {
  Li: styled.li`
    position: ${(props: Props) => (props.isLoaded ? 'static' : 'absolute')};
    z-index: ${(props: Props) => (props.isLoaded ? 'initial' : '-1')};
    opacity: ${(props: Props) => (props.isLoaded ? '1' : '0')};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    text-align: center;
    transition: 0.3s;
    :hover {
      box-shadow: 4px 4px 8px grey;
    }
  `,

  Link: styled(Link)`
    padding: 20px;
    color: unset;
  `,

  Img: styled.img`
    max-height: 13vh;
    max-width: 98%;
    margin-bottom: 1vh;
  `,

  Descr: styled.p`
    font-weight: 700;
  `,
};
