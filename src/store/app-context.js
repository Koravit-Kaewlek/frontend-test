import React, { createContext, useEffect, useState } from 'react';
import { getRandomJokes } from '../service/joke/get-random-jokes';

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [jokes, setJokes] = useState({
    count: 10,
    isSuccess: null,
    data: [],
  });
  const fetchRandomData = async () => {
    const result = await getRandomJokes({ count: jokes.count });
    if (result?.type === 'success') {
      setJokes({
        ...jokes,
        isSuccess: true,
        data: result.values,
      });
    } else {
      setJokes({
        ...jokes,
        isSuccess: false,
      });
    }
  };
  useEffect(() => {
    fetchRandomData();
    return () => {};
  }, []);
  const store = {
    jokes,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
