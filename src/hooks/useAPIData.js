import { useState, useEffect } from "react";
import SnackOrBoozeApi from "../Api";

function useAPIData(apiFunction) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await apiFunction();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { isLoading, data, setData };
}

export default useAPIData;
