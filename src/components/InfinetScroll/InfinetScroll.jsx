import React, { useEffect, useState } from 'react';
import Post from './Post';

const InfinetScroll = () => {
  const [data, setData] = useState(['el1', 'el2']);
  console.log('data', data);

  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then((res) => res.json())
      .then((arr) =>
        setData((prev) => {
          const FilterArr = arr.filter(
            (newItem) => !prev.some((existing) => existing.id === newItem.id)
          );
          return [...prev, ...filterArray];
        })
      );
  }, [page]);

  return <Post data={data} setPage={setPage} />;
};

export default InfinetScroll;
