import api from '../api';

export async function getJokes() {
  const res = await api.get('/jokes').catch((err) => console.log(err));
  return res?.data;
}
