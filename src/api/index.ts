import IProduct from 'interfaces';

function fetchData<T = IProduct[]>(url: string): Promise<T> {
  const baseURL = import.meta.env.VITE_BASE_URL;
  return fetch(baseURL + url).then(res => res.json());
}

export default {
  fetchAllProducts: () => fetchData(''),

  fetchCategories: () => fetchData<string[]>('categories'),

  fetchProductsByCategory: (category: string) =>
    fetchData(`category/${category}`),

  fetchProductById: (id: string) => fetchData<IProduct>(id),
};
