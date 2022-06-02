import styled from 'styled-components';

type Props = { err: string };

export default {
  Alt: styled.p`
    padding: 10px 0;
    font-size: 18px;
    text-align: center;
  `,

  AuthErr: styled.p`
    margin-top: 20px;
    font-size: 24px;
    color: #bf1650;
    text-align: center;
    transition: 0.5s;
    opacity: ${({ err }: Props) => (err ? 1 : 0)};
  `,
};
