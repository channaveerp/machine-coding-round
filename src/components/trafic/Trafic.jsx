import React, { useContext } from 'react';
import Signals from './Signals';
import { DataFetchContext } from '../ContextApi/DataFetching';
import UseFetchHook from '../CustomHook/CustomHook';

const Trafic = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data, loading } = UseFetchHook(url);
  console.log('fsfsfsfsf', data, loading);

  return <Signals />;
};

export default Trafic;
