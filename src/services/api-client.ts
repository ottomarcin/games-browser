import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fd530af7e47a4722ade772d6af1797aa',
  },
});
