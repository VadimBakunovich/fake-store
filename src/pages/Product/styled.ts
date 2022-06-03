import styled from 'styled-components';

const Btn = styled.button`
  background-color: var(--color-primary);
`;

type Props = { isVisible: boolean };

export default {
  RoundBtn: styled(Btn)`
    padding: 7px 15px 10px 15px;
    font-size: 24px;
    border-radius: 50%;
    box-shadow: 2px 2px 2px grey;
  `,

  Container: styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
  `,

  Wrapper: styled.div`
    width: 40%;
  `,

  Category: styled.p`
    margin-bottom: 10px;
    font-size: 24px;
    text-transform: uppercase;
    color: grey;
  `,

  Title: styled.p`
    font-size: 36px;
    margin-bottom: 15px;
  `,

  Price: styled.p`
    margin: 20px 0 30px 0;
    font-size: 24px;
    font-weight: bold;
  `,

  BtnWrapper: styled.div`
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Confirmation: styled.p<Props>`
    font-size: 20px;
    color: var(--color-primary);
    transition: 0.5s;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  `,

  Img: styled.img`
    max-height: 60vh;
  `,
};
