// import React, { useEffect, useState } from 'react';
// import '../../Styles/pagiantion.css';
// import axios from 'axios';

// const Pagination = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(5); // Optional: Set max pages if known

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://picsum.photos/v2/list?page=${page}&limit=5`
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [page]);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
//   };

//   return (
//     <>
//       <div className='img-container'>
//         {data.map((item) => (
//           <div key={item.id}>
//             <img src={item.download_url} alt={item.author} />
//           </div>
//         ))}
//       </div>

//       <div className='pagination'>
//         <button
//           disabled={page === 1}
//           onClick={() => handlePageChange(page - 1)}
//           className='pagination-btn'>
//           Prev
//         </button>

//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`pagination-btn ${page === index + 1 ? 'active' : ''}`}>
//             {index + 1}
//           </button>
//         ))}

//         <button
//           disabled={page === totalPages}
//           onClick={() => handlePageChange(page + 1)}
//           className='pagination-btn'>
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default Pagination;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  useEffect(() => {
    const fetcdata = async () => {
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=5`
        );
        console.log('API Response:', res.data);
        setData(res?.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetcdata();
  }, [page]);
  console.log('data', data);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setData(newPage);
    }
  };

  console.log('page', page);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          margin: 'auto',
        }}>
        <div>
          {data &&
            data?.map((item) => (
              <img
                src={item.download_url}
                style={{ width: '100px', height: '100px', margin: '10px' }}
              />
            ))}
        </div>
      </div>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Prev
      </button>
      {/* creating total pages in using no of pages need to showing seting manula */}
      {[...Array(totalPages)].map((_, index) => (
        <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
      ))}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}>
        next
      </button>
    </>
  );
};

export default Pagination;
