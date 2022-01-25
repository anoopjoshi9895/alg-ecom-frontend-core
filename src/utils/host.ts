export const getHost = () => {
  if (window.location.hostname === 'localhost') {
    return 'https://ae1dedaf.ngrok.io';
  }
  return window.location.protocol + '//' + window.location.hostname;
};
