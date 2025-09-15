import { useEffect, useState } from "react";
import type { AppData } from "../types/RequestI";
import axios from "axios";

let cachedData: AppData | null = null;
// data is in public folder this hook simulates the fetching
export const useAppData = () => {
  const [data, setData] = useState<AppData | null>(cachedData);
  const [loading, setLoading] = useState(!cachedData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //chashing simulation
    if (cachedData) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<AppData>("/data.json");
        cachedData = response.data;
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
