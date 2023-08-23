import react, { useState, useCallback } from "react";
import axios from "axios";
const useApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const getData = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${requestConfig.url}`).then((response) => {
        // applyData(response.data);
        console.log("response data", response);
        setData(response.data);
        applyData(response.data);

        setIsLoading(false);
      });
    } catch (error) {
      setError(error.message || "something went wrong");
      console.log("error when fetching data", error.message);
    }
    setIsLoading(false);
    console.log("ffff", data);
  }, []);
  return { data: data, error: error, isLoading, getData };
};

export default useApi;
