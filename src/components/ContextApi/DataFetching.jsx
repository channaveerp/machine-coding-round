import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const DataFetchContext = createContext();
const DataFetching = ({ url,children }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };
//   console.log('data', data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataFetchContext.Provider value={data}>
      {children}
    </DataFetchContext.Provider>
  );
};

export default DataFetching;
