import api from '../api';

export async function getRandomJokes({ count }) {
  const res = await api
    .get('/jokes/random/' + count)
    .catch((err) => console.log(err));
  return res?.data;
}
