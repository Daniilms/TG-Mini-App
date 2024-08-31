import { useEffect, useState } from "react";
import { API_EXCHANGE } from "../consts/API";
import { Valutes } from "../consts/const";
import { ExchangeT } from "../consts/types";

export const useExchangeData = () => {
  const [exchangeData, setExchangeData] = useState<ExchangeT[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_EXCHANGE}`);
        const data = await response.json();
        console.log(data);

        const filteredData = [];
        for (const key in data.Valute) {
          const valute = data.Valute[key];

          if (Object.values(Valutes).includes(valute.CharCode)) {
            filteredData.push(valute);
          }
        }
        setExchangeData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return exchangeData;
};
