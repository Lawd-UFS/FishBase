import { HttpClient, HttpMethods } from '@/http/HttpClient';
import { NextResponse } from 'next/server';

const API_URL = process.env.API_URL;
const httpClient = new HttpClient(API_URL);

async function createHeader(request) {
  const headersObj = {};
  for (const [key, value] of request.headers.entries()) {
    headersObj[key] = value;
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
