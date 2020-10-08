import React, { createContext, useEffect, useState } from 'react';
import { getJokes } from '../service/joke/get-jokes';
import { getRandomJokes } from '../service/joke/get-random-jokes';
import { getTotalJoke } from '../service/joke/get-total-joke';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [openRecordDialog, setOpenRecordDialog] = useState(false);
  const [jokes, setJokes] = useState({
    length: 100,
    isSuccess: null,
    isLoading: false,
    data: [],
    total: 0,
    prevClick: 'refresh',
  });
  const fetchData = async () => {
    console.log(
      'fetch at time: ',
      new Date(Date.now()).toLocaleString('th-TH')
    );
    setJokes({ ...jokes, isLoading: true, data: [] });
    const result = await getJokes();
    const total = await getTotalJoke();
    if (result?.type === 'success') {
      setJokes({
        ...jokes,
        isSuccess: true,
        data: [...result.value].slice(0, jokes.length),
        isLoading: false,
        total: total.value,
        prevClick: 'refresh',
      });
    } else {
      setJokes({
        ...jokes,
        isSuccess: false,
        isLoading: false,
      });
    }
  };
  const fetchRandomData = async () => {
    setJokes({ ...jokes, isLoading: true, data: [] });
    const result = await getRandomJokes({ count: jokes.length });
    const total = await getTotalJoke();
    if (result?.type === 'success') {
      setJokes({
        ...jokes,
        isSuccess: true,
        data: result.value,
        isLoading: false,
        total: total.value,
        prevClick: 'random',
      });
    } else {
      setJokes({
        ...jokes,
        isSuccess: false,
        isLoading: false,
      });
    }
  };
  const handleDisplayLength = async (length) => {
    await setJokes({ ...jokes, length });
  };
  const handleRefresh = async () => {
    await fetchData();
  };
  const handleRandom = async () => {
    await fetchRandomData();
  };
  const handleCloseRecordDialog = () => setOpenRecordDialog(false);
  const handleOpenRecordDialog = () => setOpenRecordDialog(true);
  useEffect(() => {
    (() => {
      switch (jokes.prevClick) {
        case 'refresh':
          fetchData();
          break;
        case 'random':
          fetchRandomData();
          break;
        default:
          break;
      }
    })();

    return () => {};
  }, [jokes.length]);
  const store = {
    jokes,
    handleRefresh,
    handleRandom,
    openRecordDialog,
    handleOpenRecordDialog,
    handleCloseRecordDialog,
    handleDisplayLength,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
