import axios from 'axios';
import config from '../config';

export default {
  name: 'paymentService',

  getPayments() {
    let url = config.PAYMENTS_URL;
    console.log(url);
    return axios
      .get(url)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};
