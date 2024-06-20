import { createContext, useContext, useState } from "react";
import useForecastData from "../hooks/useForecastData";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
    const [city, setCity] = useState('London');
    const {data, isLoading, isError} = useForecastData(city);
    const {location, current, forecast} = data || {};
    const values = {city, setCity, location, current, forecast, isLoading, isError}

    return <GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;