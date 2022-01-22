// function getApiUrl () {
//   let hn = window.location.hostname
//   if (hn === 'localhost') {
//     return 'http://127.0.0.1:5000/api/'
//   }
// }

const API_URL = '/api/';

export default {
  API_BASE: API_URL,
  PAYMENTS_URL: API_URL + 'payments/',
};
