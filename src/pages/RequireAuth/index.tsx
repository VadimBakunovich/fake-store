import { useLocation, Navigate } from 'react-router-dom';

import { useStore } from 'store';

type Props = { children: JSX.Element };

export default function RequireAuth({ children }: Props) {
  const { isAuth } = useStore();
  const { state } = useLocation();

  return isAuth ? children : <Navigate to='/signIn' state={state} />;
}
