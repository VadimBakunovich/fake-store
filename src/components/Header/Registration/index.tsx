import { useStore } from 'store';
import S from './styled';

export default function Registration() {
  const isAuth = useStore(state => state.isAuth);
  const userName = useStore(state => state.userName);
  const emptyCart = useStore(state => state.emptyCart);
  const toggleAuthorize = useStore(state => state.toggleAuthorize);

  const isNotRegister = userName && !isAuth;

  function handleClick() {
    emptyCart();
    toggleAuthorize();
  }

  return (
    <>
      <div>
        {isAuth || <S.NavLink to='signUp'>Sign Up</S.NavLink>}
        {isNotRegister && <S.NavLink to='signIn'>Sign In</S.NavLink>}
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
