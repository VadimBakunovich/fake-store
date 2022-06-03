import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default {
  Li: styled.li`
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    border: 1px solid var(--color-primary);
    border-radius: 10px;
    transition: 0.3s;
    :hover {
      box-shadow: 2px 3px 6px var(--color-primary);
    }
  `,

  Link: styled(Link)`
    width: 20%;
    text-align: center;
  `,

  Img: styled.img`
    max-height: 13vh;
    max-width: 90%;
  `,

  Title: styled.p`
    width: 55%;
    padding: 0 30px;
    font-size: 24px;
  `,

  BtnWrapper: styled.div`
    margin-left: auto;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  RoundBtn: styled.button`
    width: 40px;
    height: 40px;
    font-size: 15px;
    background-color: var(--color-primary);
    border-radius: 50%;
    box-shadow: 2px 2px 2px grey;
  `,

  ItemNumber: styled.span`
    font-size: 24px;
  `,

  Price: styled.p`
    width: 160px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  `,
};
