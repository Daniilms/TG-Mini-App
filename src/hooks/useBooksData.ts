import { useEffect, useState } from "react";
import { API_BOOKS } from "../consts/API";

export const useBooksData = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BOOKS}`);
        const data = await response.json();

        setBooksData(data.reading_log_entries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return booksData;
};
