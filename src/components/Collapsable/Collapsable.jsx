import React from 'react';
import OneItem from './OneItem';

const Collapsable = () => {
  return (
    <div>
      <OneItem title='Title1' initialState={false}>
        this is a content one this is a content onethis is a content one this is
        a content one this is a content onethis is a content one this is a
        content one this is a content onethis is a content one
      </OneItem>
      <OneItem title='Title2' initialState={true}>
        this is a content one this is a content onethis is a content one this is
        a content one this is a content onethis is a content one this is a
        content one this is a content onethis is a content one
      </OneItem>
    </div>
  );
};

export default Collapsable;
