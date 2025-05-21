import { NextResponse } from 'next/server';

const API_URL = process.env.API_URL;

const api = {
  post: async (path, data, headers) => {
    const response = await fetch(`${API_URL}/${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
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

async function getPath(params) {
  const requestParams = await params;
  const path = requestParams.path.join('/');
  return path;
}

export async function GET(request, { params }) {
  const path = await getPath(params);

  return executeRequest(
    async () =>
      await api.get(path, {
        headers: {
          'Content-Type': 'application/json',
          ...request.headers,
        },
      })
  );
}

export async function POST(request, { params }) {
  const path = await getPath(params);
  const data = await request.json();

  return executeRequest(
    async () =>
      await api.post(path, data, {
        headers: {
          'Content-Type': 'application/json',
          ...request.headers,
        },
      })
  );
}

export async function PUT(request, { params }) {
  const path = await getPath(params);

  return executeRequest(
    async () =>
      await api.put(path, request.body, {
        headers: {
          'Content-Type': 'application/json',
          ...request.headers,
        },
      })
  );
}

async function executeRequest(fallback) {
  try {
    const response = await fallback();
    return NextResponse.json(response, {
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    console.error('error', error.response);
    return NextResponse.json(error.response, {
      status: error.response.status,
      headers: error.response.headers,
    });
  }
}
