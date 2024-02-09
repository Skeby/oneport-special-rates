import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const useRates = (container_size, container_type) => {
  const [rates, setRates] = useState([]);
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
        });
    }
  }, [container_size, container_type]);
  return rates;
};

export default useRates;
