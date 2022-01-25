import API_DOMAIN from './apiDomain';
import ApiClient from './client';

export const api = new ApiClient(API_DOMAIN || '');
// export default api;
