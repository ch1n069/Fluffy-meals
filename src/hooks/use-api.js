import react, { useState } from "react";
import axios from "axios";
const useApi = (requestConfig, applyData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${requestConfig.url}`).then((response) => {
        setData(response.data);
        applyData(response.data);
        console.log("response data", response);

        setIsLoading(false);
      });
    } catch (error) {
      setError(error);
      console.log("error when fetching data");
    }
  };
  return { data, error, isLoading, getData };
};

export default useApi;
