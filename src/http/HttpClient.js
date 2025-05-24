export class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request({ method, path, data = {}, options = {}, raw = false }) {
    const { headers } = this.extractOptions(options, ['headers']);

    const response = await fetch(`${this.baseURL}/${path}`, {
      method,
      body: method !== HttpMethods.GET ? JSON.stringify(data) : null,
      headers: this.buildHeaders(headers),
      credentials: 'include',
    });

    if (raw) return response;

    return await response.json();
  }

  buildHeaders(headers) {
    const hasContentType = Object.keys(headers).some(
      (key) => key.toLowerCase() === 'content-type'
    );

    if (!hasContentType) {
      headers['Content-Type'] = 'application/json';
    }

    return headers;
  }

  extractOptions(optionsObject, optionsToExtract) {
    const extractedOptions = {};

    for (const option of optionsToExtract) {
      if (optionsObject[option]) {
        extractedOptions[option] = optionsObject[option];
      } else {
        extractedOptions[option] = {};
      }
    }

    return extractedOptions;
  }
}

export const HttpMethods = {
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
};
