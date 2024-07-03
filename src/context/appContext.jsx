import { createContext, useContext, useEffect, useState } from "react";
import useForecastData from "../hooks/useForecastData";
import { useConditionCodes } from "../util";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
    const [city, setCity] = useState('London');
    const [currentWeather, setCurrentWeather] = useState('');
    const {data, isLoading, isError} = useForecastData(city);
    
    // Deconstructing data
    const {location, current, forecast} = data || {};

    // Getting current weather text
    const defaultData = {condition: {code: '0'}}
    const currentData = current || defaultData;
    const {conditionText} = useConditionCodes(currentData);

    useEffect(() => {
        if (current) {
            setCurrentWeather(conditionText);
        }
    }, [current]);

    
    const values = {city, setCity, location, current, currentWeather, forecast, isLoading, isError}

    return <GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;