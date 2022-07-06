import create from 'zustand';

import IProduct from 'interfaces';

interface State {
  isAuth: boolean;
  toggleAuthorize(): void;

  userName: string | null;
  setUserName(userName: string): void;

  cart: IProduct[];
  addToCart(product: IProduct): void;
  delFromCart(id: number): void;
  emptyCart(): void;
  increaseNumber(id: number): void;
  decreaseNumber(id: number): void;

  isModalOpen: boolean;
  modalContent: JSX.Element | null;
  toggleModalOpen(modalContent?: JSX.Element): void;
}

export const useStore = create<State>(set => ({
  isAuth: false,
  toggleAuthorize: () => set(({ isAuth }) => ({ isAuth: !isAuth })),

  userName: localStorage.getItem('fake store userName'),
  setUserName: userName => set(() => ({ userName })),

  cart: [],
  addToCart: product => set(({ cart }) => ({ cart: [...cart, product] })),
  delFromCart: id =>
    set(({ cart }) => ({ cart: cart.filter(item => item.id !== id) })),
  emptyCart: () => set(() => ({ cart: [] })),
  increaseNumber: id =>
    set(({ cart }) => ({
      cart: cart.map(item => {
        if (item.id === id) {
          const newItem = { ...item };
          const num = newItem.number || 1;
          newItem.number = num + 1;
          return newItem;
        }
        return item;
      }),
    })),
  decreaseNumber: id =>
    set(({ cart }) => ({
      cart: cart.map(item => {
        if (item.id === id) {
          const newItem = { ...item };
          newItem.number! -= 1;
          return newItem;
        }
        return item;
      }),
    })),

  isModalOpen: false,
  modalContent: null,
  toggleModalOpen: modalContent =>
    set(() =>
      modalContent
        ? { isModalOpen: true, modalContent }
        : { isModalOpen: false }
    ),
}));
