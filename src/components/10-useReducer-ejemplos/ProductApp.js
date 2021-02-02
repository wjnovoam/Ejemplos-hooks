import React, { useReducer } from 'react';
import productReducer, { initialProductState } from './productReducer';
import types from './types';

const ProductApp = () => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

  const { products, cart, activeProduct } = productState;
  return (
    <div>
      <h1>Product APP</h1>
      <h2>PRODUCT</h2>
      <ul>
        {products.map(product => (
          <li>
            {product.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.productShow,
                  payload: product,
                })
              }
            >
              show
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productAddToCart,
                  payload: product,
                })
              }
            >
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>

      <h2>CART</h2>

      <ul>
        {cart.map(product => (
          <li>
            {product.title} - quantity: {product.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveOneFromCart,
                  payload: product.id,
                })
              }
            >
              remove one
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveFromCart,
                  payload: product.id,
                })
              }
            >
              remove todos
            </button>
          </li>
        ))}
      </ul>

      <h2>PREVIEW</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};

export default ProductApp;
