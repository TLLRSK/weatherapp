import { useGlobalContext } from "../context/appContext";
import { IconArrowDown, IconArrowUp } from "../util";
import CurrentSignage from "./CurrentSignage";

const CurrentDay = () => {
    const { location, current, forecast, isLoading, isError } = useGlobalContext();

    if (isLoading) {
        return <div className="flex items-center justify-center absolute top-[0] right-[0] bottom-[0] left-[0]">
            <p className="text-m animate-fadeInOut">Loading...</p>
        </div>
    }

    if (isError) {
        return <div>
            <p className="text-m text-red-600">Something went wrong.</p>
        </div>
    }

    const { name, country } = location;
    const { condition, temp_c } = current;
    const { forecastday } = forecast;
    
    const { day } = forecastday[0];
    const forecastData = {condition, temp_c};

    return <section className="current-day p-2 flex-1 flex flex-col l:p-3">

        <div className="location-container flex flex-col gap-0 justify-between">
            <h2 className="text-l font-bold uppercase">{name}</h2>
            <h3 className="text-s uppercase">{country}</h3>
        </div>

        <div className="forecast-container flex-1 flex flex-col">

            <CurrentSignage {...forecastData} />

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