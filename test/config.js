
export const BASE_URL = process.env.BASE_URL || 'https://www.rentomojo.com';

export const API = `${BASE_URL}/api`;

export const API_URLS = {
  LOCATION: '/locations',
  LOGIN: '/RMUsers/rmlogin?include=user',
};
