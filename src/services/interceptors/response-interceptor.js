import axios from 'axios';

axios.interceptors.response.use(
  async function(response) {
    try {
      // Request was successful, e.g. HTTP code 200

      debugger
      const { httpMetric } = response.config.metadata;

      // add any extra metric attributes if needed
      // httpMetric.putAttribute('userId', '12345678');

      httpMetric.setHttpResponseCode(response.status);
      httpMetric.setResponseContentType(response.headers['content-type']);
      await httpMetric.stop();
    } finally {
      return response;
    }
  },
  async function(error) {
    try {
      // Request failed, e.g. HTTP code 500

      const { httpMetric } = error.config.metadata;

      // add any extra metric attributes if needed
      // httpMetric.putAttribute('userId', '12345678');

      httpMetric.setHttpResponseCode(error.response.status);
      httpMetric.setResponseContentType(error.response.headers['content-type']);
      await httpMetric.stop();
    } finally {
      // Ensure failed requests throw after interception
      return Promise.reject(error);
    }
  },
);