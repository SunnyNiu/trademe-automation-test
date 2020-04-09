const environment = process.env.NODE_ENV || 'test';

export default {
  test: {
    baseURL: 'https://api.tmsandbox.co.nz',
    apiVersion: 'v1',
  },
}[environment];
