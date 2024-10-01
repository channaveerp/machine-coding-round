import React, { useMemo, useState } from 'react';

const products = ['apple123', 'apple2', 'apple3', 'apple4', 'apple5', 'apple6'];

export const UseMemoHook = () => {
  const [searTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  const filterdeProducts = products.filter((product) => {
    console.log('filterdeProducts filteringproducts');
    return product.toLowerCase().includes(searTerm.toLowerCase());
  });

  //   const filterdeProducts = useMemo(() => {
  //     console.log('filterdeProducts filteringproducts');
  //     return products.filter((product) =>
  //       product.toLowerCase().includes(searTerm.toLowerCase())
  //     );
  //   }, [searTerm]);

  return (
    <div>
      <input
        type='text'
        value={searTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filterdeProducts.map((product) => (
          <li>{product}</li>
        ))}
      </div>

      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
};
