import styled from 'styled-components';

import imgPath from 'assets/intro.svg';

export default {
  Wrapper: styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `,

  TxtBlock: styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  Heading: styled.h1`
    margin-bottom: 20px;
    font-size: 46px;
    color: ${({ theme }) => theme.primary};
  `,

  Descr: styled.p`
    margin-bottom: 30px;
    color: #3a3134;
    letter-spacing: 0.6px;
  `,

  Image: styled.div`
    width: 60%;
    height: 70vh;
    background-image: url(${imgPath});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `,
};
