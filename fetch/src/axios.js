import axios from 'axios'; // eslint-disable-line import/no-extraneous-dependencies
import $fetch from './index';


function adapter(config) {
  return new Promise((resolve, reject) => {
    const { method, url, params = {}, data = {} } = config; // eslint-disable-line object-curly-newline
    const headers = config.headers.toJSON();

    const options = {};
    if (config.credentials) {
      options.credentials = config.credentials;
    }

    return $fetch[method](url, params, data, headers, options).then(resolve).catch(reject);
  });
}


function create() {
  return axios.create({
    adapter,
    headers: { 'X-Requested-With': 'vanilla.js/fetch' },
  });
}


export default { create };
