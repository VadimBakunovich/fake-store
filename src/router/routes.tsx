import { lazy } from 'react';

import HomePage from 'pages/HomePage';

const AllProducts = lazy(() => import('pages/AllProducts'));
const Category = lazy(() => import('pages/Category'));
const Product = lazy(() => import('pages/Product'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const CartPage = lazy(() => import('pages/CartPage'));
const RequireAuth = lazy(() => import('pages/RequireAuth'));
const Checkout = lazy(() => import('pages/Checkout'));
const NotFound = lazy(() => import('pages/NotFound'));

export default [
  { path: '/', element: <HomePage /> },
  { path: 'all', element: <AllProducts /> },
  { path: 'product/:id', element: <Product /> },
  { path: 'category/:category', element: <Category /> },
  { path: 'signUp', element: <SignUp /> },
  { path: 'signIn', element: <SignIn /> },
  { path: 'cart', element: <CartPage /> },
  {
    path: 'checkout',
    element: (
      <RequireAuth>
        <Checkout />
      </RequireAuth>
    ),
  },
  { path: '*', element: <NotFound /> },
];
