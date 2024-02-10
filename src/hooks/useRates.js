import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const useRates = (container_size, container_type) => {
  const [rates, setRates] = useState([]);
  const [isLoading, setLoading] = useState(true);
  console.log(container_size, container_type);

  useEffect(() => {
    if (container_size && container_type) {
      apiClient
        .get("/get_special_rates_no_auth", {
          params: {
            container_size: container_size.toUpperCase(),
            container_type: container_type.toLowerCase(),
          },
        })
        .then((res) => {
          setRates(res.data.data.rates);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });
    }
  }, [container_size, container_type]);
  return { rates, isLoading };
};

export default useRates;
