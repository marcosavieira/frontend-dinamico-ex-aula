const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 100000,
  headers: {'Content-Type': 'Application/json'}
});