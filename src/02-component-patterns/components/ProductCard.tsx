import { createContext, ReactNode } from 'react';

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactNode;
  className?: string;
}

export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
