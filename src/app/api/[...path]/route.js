import { cookies } from 'next/headers';
import { HttpClient, HttpMethods } from '@/http/HttpClient';
import { NextResponse } from 'next/server';

const API_URL = process.env.API_URL;
const httpClient = new HttpClient(API_URL);

function setCookies(response, nextResponse) {
  const cookies = response.headers.get('set-cookie');

  if (cookies) {
    const cookieArray = cookies.split(',');

    cookieArray.forEach((cookie) => {
      const [pair] = cookie.split(';');
      const [name, value] = pair.split('=');

      nextResponse.cookies.set(name.trim(), value.trim(), { httpOnly: true });
    });
  }
}

async function createHeader(request) {
  const headersObj = {};
  for (const [key, value] of request.headers.entries()) {
    headersObj[key] = value;
  }

  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join('; ');

  if (cookieHeader) {
    headersObj['cookie'] = cookieHeader;
  }

  return headersObj;
}

async function proxyRequest(method, request, params) {
  try {
    const requestParams = await params;

    const path = requestParams.path.join('/');
    const data = method === HttpMethods.GET ? undefined : await request.json();

    const requestHeaders = await createHeader(request);

    const response = await httpClient.request({
      method,
      path,
      data,
      options: { headers: requestHeaders },
      raw: true,
    });

    const body = await response.json();

    const nextResponse = NextResponse.json(body, {
      status: response.status,
    });

    setCookies(response, nextResponse);

    return nextResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.json(error.response, {
      status: error.response.status,
      headers: error.response.headers,
    });
  }
}

export async function GET(request, { params }) {
  return proxyRequest(HttpMethods.GET, request, params);
}

export async function POST(request, { params }) {
  return proxyRequest(HttpMethods.POST, request, params);
}

export async function PUT(request, { params }) {
  return proxyRequest(HttpMethods.PUT, request, params);
}
