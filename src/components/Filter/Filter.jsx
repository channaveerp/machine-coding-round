import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

const Filter = () => {
  const [data, setdata] = useState([]);
  const [selectdata, setSelect] = useState('');
  const [search, setSearch] = useState('');

  const [desData, setdsData] = useState('');
  const fetchData = async () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setdata(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filterData = data?.data?.filter((item) => item.category === selectdata);

  //   console.log('filterData:', filterData);
  const finalFilter = filterData?.length ? filterData : data.data;

  //   console.log('selectdata', selectdata);
  //   console.log('desData', desData);

  const sortData = finalFilter?.sort((a, b) => {
    if (desData === 'asd') {
      return a.price - b.price;
    } else if (desData === 'dsd') {
      return b.price - a.price;
    }
  });

  const searData = finalFilter?.filter(
    (item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item?.price?.toString().includes(search.toLowerCase())
  );
  console.log('search:', searData);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
        <div>
          Filter
          <select
            onChange={(e) => setSelect(e.target.value)}
            value={selectdata}>
            <option value="men's clothing">men's clothing</option>
            <option value='jewelery'>jewelery</option>
            <option value='electronics'>electronics</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
        <div>
          sorting
          <select onChange={(e) => setdsData(e.target.value)} value={desData}>
            <option value='asd'>asd</option>
            <option value='dsd'>dsd</option>
          </select>
        </div>
      </div>
      <div>
        <input
          style={{ width: '400px' }}
          type='text'
          placeholder='sear here by title	'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div style={{ width: '80%' }}>
        <tabel>
          <thead>
            <th>ID</th>
            <th>title</th>
            <th>Images</th>
            <th>Category</th>
            <th>price</th>
          </thead>
          <tbody>
            {searData?.length === 0 ? (
              <>no data found</>
            ) : (
              <>
                {searData?.map((item, index) => (
                  <tr key={item.id}>
                    <td style={{ margin: '5px' }}>{item.id}</td>
                    <td style={{ margin: '5px' }}>{item.title.slice(0, 10)}</td>
                    <td style={{ margin: '5px' }}>
                      <img
                        style={{
                          width: '50px',
                          height: '50px',
                          objectFit: 'cover',
                        }}
                        src={item.image}
                        alt=''
                      />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </tabel>
      </div>
      {/* <Pagination searData={searData} /> */}
    </div>
  );
};

export default Filter;
