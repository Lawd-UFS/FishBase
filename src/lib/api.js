const API_URL = '/api';

const api = {
  extractOptions: (optionsObject, optionsToExtract) => {
    const extractedOptions = {};

    for (const option of optionsToExtract) {
      if (optionsObject[option]) {
        extractedOptions[option] = optionsObject[option];
      } else {
        extractedOptions[option] = {};
      }
    }

    return extractedOptions;
  },

  post: async (path, data, options = {}) => {
    const { headers } = api.extractOptions(options, ['headers']);

    const response = await fetch(`${API_URL}/${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', ...headers },
    });

    return await response.json();
  },

  put: async (path, data, options = {}) => {
    const { headers } = api.extractOptions(options, ['headers']);

    const response = await fetch(`${API_URL}/${path}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', ...headers },
    });

    return await response.json();
  },

  get: async (path, options = {}) => {
    const { headers } = api.extractOptions(options, ['headers']);

    const response = await fetch(`${API_URL}/${path}`, { headers });
    return await response.json();
  },
};

export const registerParticipant = async (data) => {
  const response = await api.post('/participants/register', data);

  return response;
};

export const confirmRegistration = async (token) => {
  const response = await api.put('/participants/confirm-enrollment', {
    token,
  });

  return response;
};

export const resendConfirmationLink = async (token) => {
  const response = await api.post('/participants/resend-confirmation-email', {
    token,
  });

  return response;
};

export const getUserProfile = async (token) => {
  const response = await api.get('/participants/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const getProgramming = async () => {
  const response = await api.get('/programming');

  return response;
};

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });

  return response;
};
