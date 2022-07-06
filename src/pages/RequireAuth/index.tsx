import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStore } from 'store';

type Props = { children: JSX.Element };

export default function RequireAuth({ children }: Props) {
  const { isAuth } = useStore();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate('/signIn', { state });
  }, []);

  // The solution below cause "Maximum update depth exceeded":
  // https://github.com/remix-run/react-router/discussions/8008

  //return isAuth ? children : <Navigate to='/signIn' state={state} />;

  return isAuth ? children : null;
}
