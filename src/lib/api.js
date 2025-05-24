import { HttpClient, HttpMethods } from '@/http/HttpClient';

const API_URL = '/api';

const httpClient = new HttpClient(API_URL);

export const registerParticipant = async (data) => {
  const response = await httpClient.request({
    method: HttpMethods.POST,
    path: '/participants/register',
    data,
  });

  return response;
};

export const confirmRegistration = async (token) => {
  const response = await httpClient.request({
    method: HttpMethods.POST,
    path: '/participants/confirm-enrollment',
    data: {
      token,
    },
  });

  return response;
};

export const resendConfirmationLink = async (token) => {
  const response = await httpClient.request({
    method: HttpMethods.POST,
    path: '/participants/resend-confirmation-email',
    data: {
      token,
    },
  });

  return response;
};

export const getUserProfile = async (token) => {
  const response = await httpClient.request({
    method: HttpMethods.GET,
    path: '/participants/profile',
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return response;
};

export const getProgramming = async () => {
  const response = await httpClient.request({
    method: HttpMethods.GET,
    path: '/programming',
  });

  return response;
};

export const executelogin = async (email, password) => {
  const response = await httpClient.request({
    method: HttpMethods.POST,
    path: '/auth/login',
    data: { email, password },
  });

  return response;
};

export const refreshToken = async () => {
  const response = await httpClient.request({
    method: HttpMethods.POST,
    path: '/auth/refresh-token',
  });

  return response;
};
