import axios, { AxiosRequestConfig } from 'axios';

export function getAuthHeader(token?: string) {
  if (!token) {
    return {};
  }
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function getSettingHeaders(
  languageID?: number,
  websiteID?: number,
  subsiteID?: number,
  token?: string
) {
  if (!languageID || !websiteID || !subsiteID) {
    return {};
  }
  return {
    languageID,
    websiteID,
    subsiteID,
    userToken: token,
  };
}

export async function get(
  url: string,
  languageID?: number,
  websiteID?: number,
  subsiteID?: number,
  token?: string
) {
  const options = {
    headers: {
      ...getAuthHeader(token),
      ...getSettingHeaders(languageID, websiteID, subsiteID, token),
    },
  };
  return axios.get(url, options);
}

export async function post(
  url: string,
  data: any,
  languageID?: number,
  websiteID?: number,
  subsiteID?: number,
  contentType?: string,
  token?: string
) {
  const options: AxiosRequestConfig = {
    url,
    method: 'POST',
    headers: {
      ...getAuthHeader(token),
      ...getSettingHeaders(languageID, websiteID, subsiteID,token),
      'Content-Type': contentType ? contentType : 'application/json',
    },
  };
  return axios.post(url, data, options);
}

export async function put(
  url: string,
  data: any,
  token?: string,
  languageID?: number,
  websiteID?: number,
  subsiteID?: number
) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(token),
      ...getSettingHeaders(languageID, websiteID, subsiteID),
      'Content-Type': 'application/json',
    },
  };
  return axios.put(url, JSON.stringify(data), options);
}

export async function remove(
  url: string,
  token?: string,
  languageID?: number,
  websiteID?: number,
  subsiteID?: number
) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(token),
      ...getSettingHeaders(languageID, websiteID, subsiteID),
    },
  };
  return axios.delete(url, options);
}

export async function upload(
  url: string,
  data: FormData,
  onUploadProgress: (progressEvent: any) => void,
  token?: string,
  languageID?: number,
  websiteID?: number,
  subsiteID?: number
) {
  const options: AxiosRequestConfig = {
    onUploadProgress,
    headers: {
      ...getAuthHeader(token),
      ...getSettingHeaders(languageID, websiteID, subsiteID),
      'Content-Type': 'multipart/form-data',
    },
  };
  return axios.post(url, data, options);
}

export async function download(
  url: string,
  token?: string,
  accept?: string,
  languageID?: number,
  websiteID?: number,
  subsiteID?: number
) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(token),
      ...getSettingHeaders(languageID, websiteID, subsiteID),
      Accept: accept,
    },
    responseType: 'arraybuffer',
  };
  return axios.get(url, options);
}
