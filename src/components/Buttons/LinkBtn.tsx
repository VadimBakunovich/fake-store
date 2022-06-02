import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBtn = styled(Link)`
  width: fit-content;
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;
  box-shadow: 2px 2px 4px black;
  :hover {
    filter: brightness(1.3);
  }
`;

export const LinkBtnUC = styled(LinkBtn)`
  width: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
