import styled from 'styled-components';

type Props = { isErr: boolean };

export default styled.span`
  font-size: 12px;
  color: #bf1650;
  transition: 0.3s;
  opacity: ${({ isErr }: Props) => (isErr ? 1 : 0)};
  ::before {
    content: '⚠ ';
    font-size: 14px;
  }
`;
