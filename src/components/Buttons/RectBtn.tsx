import styled from 'styled-components';

const BaseBtn = styled.button`
  background-color: var(--color-primary);
`;

export const RectBtn = styled(BaseBtn)`
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px black;
`;

export const RectBtnUC = styled(RectBtn)`
  margin-top: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
