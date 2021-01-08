import axios from 'axios'
const options = {};
options.baseURL = 'http://test.doremon.ir/api';
const service = axios.create(options);
export default service;
