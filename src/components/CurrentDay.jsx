import { useGlobalContext } from "../context/appContext";

const CurrentDay = () => {
    const { location, current, forecast, isLoading, isError } = useGlobalContext();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something went wrong.</div>
    }

    const { name, country, localtime_epoch } = location;
    const { condition } = current;
    const { forecastday } = forecast;
    const { date, day, hour } = forecastday[0];

    return <section className="current-day">
        <div className="location-container">
            <h2>{name}, {country}</h2>
            <p>{date}</p>
        </div>
        <div className="forecast-container">
            <div className="condition">
                <p>{condition.text}</p>
            </div>
            <div className="temperatures">
                <p>{day.maxtemp_c} ºC</p>
                <p>{day.mintemp_c} ºC</p>
            </div>
        </div>
        <ul className="hours-carousel">
            {hour?.map((hour, index) => {
                return <li key={index} className="hour-container">
                    <p>Hour</p>
                </li>
            })}
        </ul>
    </section>
}
export default CurrentDay;