import api from '../api';

export async function getRandomJoke() {
  const res = await api.get('/jokes/random/').catch((err) => console.log(err));
  return res?.data;
}
