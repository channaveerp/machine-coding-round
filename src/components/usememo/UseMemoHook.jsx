import React, { useMemo, useState } from 'react';

const data = ['apple', 'orange', 'mango', 'apple2', 'orange2', 'mango2'];

export const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
  };

  //   const filterData = data.filter((item) => {
  //     console.log('Filtering:', item);
  //     return item.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  //   });

  const filterData = useMemo(() => {
    return data.filter((item) => {
      console.log('Filtering:', item, 'against search term:', search);
      return item.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }, [search]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>{filterData && filterData.map((item) => <li>{item}</li>)}</div>

      <p>{count} </p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
    </div>
  );
};
