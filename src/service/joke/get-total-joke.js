import api from '../api';

export async function getTotalJoke() {
  const res = await api.get('/jokes/count').catch((err) => console.log(err));
  return res?.data;
}
