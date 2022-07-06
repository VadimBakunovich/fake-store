import { Suspense } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import routes from './routes';
import { AnimatedContainer } from 'components/AnimatedContainer';

export default function AnimatedRoutes() {
  const element = useRoutes(routes);
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <AnimatePresence exitBeforeEnter>
        <AnimatedContainer key={pathname}>{element}</AnimatedContainer>
      </AnimatePresence>
    </Suspense>
  );
}
