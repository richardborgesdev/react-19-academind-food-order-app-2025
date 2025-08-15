import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = fetch(url, config);

  try {
    const resData = await (await response).json();

    return resData;
  } catch (error) {
    throw new Error(resData.message || "Something went wrong, failed to send request.");
  }

}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async function sendRequest() {
    setLoading(true);

    try {
      const resData = await sendHttpRequest(url, config);

      setData(resData);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }

    setLoading(false);
  }, [url, config]);

  useEffect(() => {
    if ((config && config.method === 'GET' || !config.method) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
