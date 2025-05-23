const API_URL = '/api';

const api = {
  post: async (path, data, headers) => {
    const response = await fetch(`${API_URL}/${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { ...headers },
    });

    return await response.json();
  },
  put: async (path, data, headers) => {
    const response = await fetch(`${API_URL}/${path}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { ...headers },
    });

    return await response.json();
  },
  get: async (path, headers) => {
    const response = await fetch(`${API_URL}/${path}`, { headers });
    return await response.json();
  },
};

export const registerParticipant = async (data) => {
  const response = await api.post('/participants/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const confirmRegistration = async (token) => {
  const response = await api.put(
    '/participants/confirm-enrollment',
    {
      token,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const resendConfirmationLink = async (token) => {
  const response = await api.post(
    '/participants/resend-confirmation-email',
    {
      token,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};
