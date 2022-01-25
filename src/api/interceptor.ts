import axios from 'axios';

export const UseUnauthorizedApiResponseInterceptor = (
  onUnauthorizedResponse?: () => void
) => {
  axios.interceptors.response.use(undefined, (err) => {
    if (err.response && err.response.status === 401) {
      if (onUnauthorizedResponse) {
        onUnauthorizedResponse();
      }
    }
    throw err;
  });
};

// export default useUnauthorizedApiResponseInterceptor;
