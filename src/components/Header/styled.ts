import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default {
  Header: styled.header`
    position: sticky;
    top: 0;
    padding: 15px 0;
    color: #f5f5f5;
    background-color: var(--color-primary);
  `,

  Container: styled.div`
    margin: 0 auto;
    max-width: 1680px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  `,

  Link: styled(NavLink)`
    font-size: 24px;
  `,

  Nav: styled.nav`
    display: flex;
    flex-basis: 55%;
    align-items: center;
    font-size: 18px;
  `,
};
