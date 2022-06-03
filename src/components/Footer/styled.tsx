import styled from 'styled-components';

export default {
  Footer: styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #f5f5f5;
    background-color: var(--color-primary);
  `,

  Btn: styled.button`
    padding: 0 10px 5px 10px;
    font-size: inherit;
    color: #f5f5f5;
    border: 1px solid transparent;
    background-color: inherit;
    :hover {
      filter: unset;
      border-bottom: 1px solid white;
    }
  `,
};
