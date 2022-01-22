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

  // disableOTP() {

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'User-Agent': 'Paystack-Developers-Hub',
  //       Authorization:
  //         'Bearer sk_live_b76987eb655f86aeab93215f2b5289a7323129cf',
  //     },
  //   };

  //   fetch('https://api.paystack.co/transfer/disable_otp', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // },

  // verifyDisableOTP() {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'User-Agent': 'Paystack-Developers-Hub',
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer sk_live_b76987eb655f86aeab93215f2b5289a7323129cf',
  //     },
  //     body: JSON.stringify({
  //       otp: '819951',
  //     }),
  //   };

  //   fetch('https://api.paystack.co/transfer/disable_otp_finalize', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // },
};
