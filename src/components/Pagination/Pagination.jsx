import React, { useEffect, useState } from 'react';
import '../../Styles/pagiantion.css';
import axios from 'axios';

const Pagination = () => {
  const [data, serData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      .then((res) => serData(res.data))
      .catch((err) => console.log(err));
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  const PrevThreeArray = Array.from(
    { length: 2 },
    (_, index) => page - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();

  const nextFourArray = Array.from(
    { length: 2 },
    (_, index) => page + 1 + index
  );
  const PageArraYValue = [page, ...PrevThreeArray, ...nextFourArray];
  console.log('PageArraYValue', PageArraYValue);

  return (
    <>
      <div className='img-conatiner'>
        {data.map((item) => (
          <div key={item}>
            <img src={item.download_url} alt='download_url' />
          </div>
        ))}
      </div>
      {/* pagination btn */}
      <div>
        {page > 0 ? (
          <button className='pagiantion-btn' onClick={handlePrev}>
            {'prev'}
          </button>
        ) : (
          ''
        )}

        {PageArraYValue.map((value) => (
          <button
            onClick={() => setPage(value)}
            className={
              page === value ? 'active pagiantion-btn' : `pagiantion-btn`
            }>
            {value}
          </button>
        ))}

        <button className='pagiantion-btn' onClick={handleNext}>
          {'next'}
        </button>
      </div>
    </>
  );
};

export default Pagination;
