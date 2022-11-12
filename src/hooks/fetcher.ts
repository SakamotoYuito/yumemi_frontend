export const fetcher = async (apiPath: string) => {
  const apiDomain = process.env.NEXT_PUBLIC_RESAS_API_URI
    ? process.env.NEXT_PUBLIC_RESAS_API_URI
    : '';
  if (process.env.NEXT_PUBLIC_RESAS_API_KEY === undefined) {
    throw new Error('API key is undefined.');
  }
  const url = apiDomain + apiPath;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
