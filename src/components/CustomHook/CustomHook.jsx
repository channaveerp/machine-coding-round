import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseFetchHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resdata = await axios.get(url);
      setData(resdata);
      setLoading(false);
    } catch (err) {
      console.log('error fetching data', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);
  return { data, loading };
};

export default UseFetchHook;
