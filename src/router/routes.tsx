import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import HomePage from 'pages/HomePage';

const AllProducts = lazy(() => import('pages/AllProducts'));
const Product = lazy(() => import('pages/Product'));
const Category = lazy(() => import('pages/Category'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const CartPage = lazy(() => import('pages/CartPage'));
const RequireAuth = lazy(() => import('pages/RequireAuth'));
const Checkout = lazy(() => import('pages/Checkout'));
const NotFound = lazy(() => import('pages/NotFound'));

export default [
  ['/', <HomePage />],
  ['all', <AllProducts />],
  ['product/:id', <Product />],
  ['category/:category', <Category />],
  ['signUp', <SignUp />],
  ['signIn', <SignIn />],
  ['cart', <CartPage />],
  [
    'checkout',
    <RequireAuth>
      <Checkout />
    </RequireAuth>,
  ],
  ['*', <NotFound />],
].map(([path, element]) => ({ path, element } as RouteObject));
