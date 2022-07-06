import { BrowserRouter } from 'react-router-dom';

import { Header } from 'components/Header';
import Footer from 'components/Footer';
import AnimatedRoutes from './AnimatedRoutes';
import AppModal from 'components/AppModal';

export const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <AnimatedRoutes />
    <Footer />
    <AppModal />
  </BrowserRouter>
);
