# JP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jeral Pineda

## Ejemplo

```
import {ProductButtons, ProductCard, ProductImage, ProductTitle,} from 'jp-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    // maxCount: 10,
  }}
>
  {({reset, count, isMaxCountReached, increaseBy}) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
