
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useForecastData = (city) => {
  const accessToken = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${accessToken}&q=${city}&days=1&aqi=no&alerts=no`;

  const fetchData = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['queryKey', city],
    queryFn: fetchData,
  });

  return { data, isLoading, isError };
};

export default useForecastData;
