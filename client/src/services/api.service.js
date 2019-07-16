import axios from 'axios'

import config from '../config'

const Instance = axios.create({
  baseURL: config.apiEndpoint,
  timeout: 20000,
})

export default Instance;
