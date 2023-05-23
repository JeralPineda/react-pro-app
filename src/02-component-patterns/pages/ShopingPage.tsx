/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShopingPage = () => {
  return (
    <div>
      <h1>ShopingPage</h1>
      <hr />

      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
