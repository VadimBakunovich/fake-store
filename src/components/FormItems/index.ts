import styled from 'styled-components';

export default {
  Title: styled.h2`
    margin-bottom: 20px;
  `,

  Form: styled.form`
    padding-bottom: 10px;
    margin: 0 auto;
    max-width: 410px;
    display: flex;
    flex-direction: column;
  `,

  PassWrapper: styled.div`
    position: relative;
  `,

  Input: styled.input`
    width: 100%;
    margin-top: 5px;
    padding: 10px 30px 10px 15px;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 4px;
    outline: none;
    :focus {
      border: ${({ theme }) => `1px solid ${theme.primary}`};
      box-shadow: ${({ theme }) => `0 0 3px ${theme.primary}`};
    }
  `,

  Note: styled.p`
    font-size: 14px;
    margin-top: 5px;
  `,
};
