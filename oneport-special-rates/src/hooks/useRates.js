import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const useRates = ({ container_size, container_type }) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    apiClient
      .get("/get_special_rates_no_auth", {
        params: {
          container_size: container_size,
          container_type: container_type,
        },
      })
      .then((res) => {
        setRates(res.data.data.rates);
        console.log(rates);
      });
  });
  return rates;
};

export default useRates;
