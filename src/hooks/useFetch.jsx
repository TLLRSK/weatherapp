import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetForecast = () => {
    const [city, setCity] = useState('London');
    const [forecastData, setForecastData] = useState({});

    const fetchData = async () => {
        const accessToken = import.meta.env.VITE_API_KEY;
        const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${accessToken}&q=${city}&days=1&aqi=no&alerts=no`;

        const response = await axios.get(endpoint);

        return response.data;
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['queryKey', city],
        queryFn: fetchData,
    });

    useEffect(() => {
        setForecastData(data);
    }, [data])

    return {city, setCity, forecastData, isLoading, isError};
}

export default useGetForecast;