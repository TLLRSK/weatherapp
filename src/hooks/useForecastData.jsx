import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useForecastData = (city) => {
  const [forecastData, setForecastData] = useState({});
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`;

  const fetchData = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['queryKey', city],
    queryFn: fetchData,
  });

  useEffect(() => {
    if (data) {
      setForecastData(data);
    }
  }, [data]);

  return { forecastData, isLoading, isError };
};

export default useForecastData;
