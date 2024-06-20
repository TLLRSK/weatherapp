import { useGlobalContext } from "../context/appContext";
import { Hour } from "../util";

const HourCarousel = () => {
    const {forecast, isLoading, isError} = useGlobalContext();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something went wrong.</div>
    }

    const { forecastday } = forecast;
    
    const { hour } = forecastday[0];

    return (hour?.map((singleHour, i) => {
        return <Hour {...singleHour} key={i}/>
    }))
}
export default HourCarousel;