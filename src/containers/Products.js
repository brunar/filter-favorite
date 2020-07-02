import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = props => {
  //const [state, dispatch] = useStore();
  const state = useStore()[0]; // no need dispatch any action here in this example
  //and [0] just accessing the first element returned by the customs store at a custom hook because the custom hook returns two things: local state and dispatch. Only needs the state.
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
      {/* state.products is
      output state products because we know there will be a product's key in our state because that's 
      what we're setting up in the products stored J.S. file when we initialize our state then here.
      */}
    </ul>
  );
};

export default Products;
