import { api } from './api';

export const productsCacheKey = 'products';

const getProducts = async () => {
  const { data } = await api.get(`${productsCacheKey}`);
  return data.products;
};

export { getProducts };
