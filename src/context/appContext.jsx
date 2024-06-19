import { createContext, useContext, useState } from "react";
import useForecastData from "../hooks/useForecastData";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
    const [city, setCity] = useState('London');
    const {forecastData, isLoading, isError} = useForecastData(city);

    const values = {city, setCity, forecastData, isLoading, isError}

    return <GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;