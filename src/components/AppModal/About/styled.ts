import styled from 'styled-components';

export default {
  Container: styled.div`
    width: 500px;
    height: 685px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.h2`
    width: 90%;
    padding-bottom: 15px;
    border-bottom: 2px solid gray;
  `,

  Table: styled.table`
    width: 100%;
    padding: 25px 20px;
  `,

  LeftCell: styled.td`
    padding: 8px 0;
    font-weight: 600;
  `,

  RightCell: styled.td``,

  Link: styled.a`
    display: block;
    padding: 7px 10px;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-top-right-radius: 8px;
    color: inherit;
    text-align: left;
    transition: 0.3s;
    :hover {
      color: white;
      background-color: ${({ theme }) => theme.primary};
    }
  `,

  RepoLink: styled.a`
    font-weight: 600;
    color: initial;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
  `,
};
