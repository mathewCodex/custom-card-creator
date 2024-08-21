import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  isFetching: boolean;
  fetchedData: T;
  setFetchedData: React.Dispatch<React.SetStateAction<T>>;
  error: { message: string } | null;
}

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  initialValue: T
): UseFetchResult<T> {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [fetchedData, setFetchedData] = useState<T>(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error: any) {
        setError({ message: error.message || "Failed to fetch data." });
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
