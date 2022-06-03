import { useStore } from 'store';
import S from './styled';

export default function Registration() {
  const { isAuth, userName, emptyCart, toggleAuthorize, setModalContent } =
    useStore();

  function handleClick() {
    emptyCart();
    toggleAuthorize();
  }

  return (
    <>
      <div>
        {!isAuth && <S.NavLink to='signUp'>Sign Up</S.NavLink>}
        {/* <S.Btn onClick={() => setModalContent(<SignUp />)}>Sign Up</S.Btn> */}
        {userName && !isAuth && <S.NavLink to='signIn'>Sign In</S.NavLink>}
      </div>
      {isAuth && (
        <div>
          <span>Welcome, {userName}!</span>
          <S.Btn onClick={handleClick}>Sign Out</S.Btn>
        </div>
      )}
    </>
  );
}
