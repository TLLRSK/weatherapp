import { useGlobalContext } from "../context/appContext";
import { IconArrowDown, IconArrowUp } from "../util";
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

    return <section className="current-day p-2 flex-1 flex flex-col">

        <div className="location-container">
            <h2 className="text-l uppercase">{name}</h2>
            <h3 className="text-s">{country}</h3>
        </div>

        <div className="forecast-container flex-1 flex flex-col">

            <CurrentSignage {...condition} />

            <div className="temperatures flex justify-between">

                <div className="current">
                    <p className="text-xxl leading-xxl">{Math.trunc(temp_c)}<span className="text-l font-semibold">°C</span></p>
                </div>

                <div className="maxmin flex flex-col justify-between">
                    <div className="flex items-center gap-1">
                        <IconArrowUp className={"fill-secondary w-3 h-3"}/>
                        <p className="text-ml">{Math.trunc(day.maxtemp_c)}°C</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <IconArrowDown className={"fill-secondary w-3 h-3"}/>
                        <p className="text-ml">{Math.trunc(day.mintemp_c)}°C</p>
                    </div>
                </div>

            </div>

            <div className="condition mt-2">
                <p className="text-ml">{condition.text}</p>
            </div>

        </div>
    </section>
}
export default CurrentDay;