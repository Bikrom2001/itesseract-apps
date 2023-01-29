import React from 'react';
import ProductBanner from '../ProductBanner/ProductBanner';
import ProductList from '../ProductList/ProductList';

const ProductMain = () => {
    return (
      <div>
        <ProductBanner title="Our Products"></ProductBanner>
        <ProductList></ProductList>
      </div>
    );
};

export default ProductMain;