import axios from 'axios';

import { IProduct } from 'interfaces';

const { get } = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

function getData<T = IProduct[]>(url: string): Promise<T> {
  return get(url).then(({ data }) => data);
}

export default {
  fetchAllProducts: () => getData(''),

  fetchCategories: () => getData<string[]>('categories'),

  fetchProductsByCategory: (category: string) =>
    getData(`category/${category}`),

  fetchProductById: (id: string) => getData<IProduct>(id),
};
