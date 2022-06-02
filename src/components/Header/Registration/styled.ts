import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default {
  NavLink: styled(NavLink)`
    margin-right: 10px;
  `,

  Btn: styled.button`
    margin-left: 30px;
    padding: 5px 10px;
    font-size: inherit;
    color: #f5f5f5;
    text-transform: capitalize;
    background-color: inherit;
    border: 1px solid transparent;
    :hover {
      filter: unset;
      border-bottom: 1px solid white;
    }
  `,
};
