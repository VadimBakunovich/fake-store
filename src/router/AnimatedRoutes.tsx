import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from 'pages/HomePage';
import RequireAuth from 'pages/RequireAuth';

const AllProducts = lazy(() => import('pages/AllProducts'));
const Category = lazy(() => import('pages/Category'));
const Product = lazy(() => import('pages/Product'));
const SignUp = lazy(() => import('pages/SignUp'));
const SignIn = lazy(() => import('pages/SignIn'));
const CartPage = lazy(() => import('pages/CartPage'));
const Checkout = lazy(() => import('pages/Checkout'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='all' element={<AllProducts />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='category/:category' element={<Category />} />
          <Route path='category/:category/product/:id' element={<Product />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='cart/product/:id' element={<Product />} />
          <Route
            path='checkout'
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
