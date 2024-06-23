import { useGlobalContext } from "../context/appContext";
import CurrentSignage from "./CurrentSignage";

const CurrentDay = () => {
    const { location, current, forecast, isLoading, isError } = useGlobalContext();

    if (isLoading) {
        return <div className="text-m">Loading...</div>
    }

    if (isError) {
        return <div className="text-m">Something went wrong.</div>
    }

    const { name, country } = location;
    const { condition, temp_c } = current;
    const { forecastday } = forecast;
    
    const { day } = forecastday[0];
    const formattedTemperature = Math.trunc(temp_c);

    return <section className="current-day p-2 flex-1 flex flex-col">

        <div className="location-container">
            <h2 className="text-l uppercase">{name}</h2>
            <h3 className="text-s">{country}</h3>
        </div>

        <CurrentSignage {...condition} />

        <div className="forecast-container flex-1 flex flex-col justify-end">
            <div className="temperatures flex justify-between">

                <div className="current">
                    <p className="text-xxl leading-xxl">{formattedTemperature}<span className="text-xl">°C</span></p>
                </div>

                <div className="maxmin flex flex-col justify-between">
                    <p className="text-ml">{day.maxtemp_c}°C</p>
                    <p className="text-ml">{day.mintemp_c}°C</p>
                </div>
            </div>

            <div className="condition">
                <p className="text-ml">{condition.text}</p>
            </div>

        </div>
    </section>
}
export default CurrentDay;