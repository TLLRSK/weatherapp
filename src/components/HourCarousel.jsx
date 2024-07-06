import { useGlobalContext } from "../context/appContext";
import { Hour } from "../util";

const HourCarousel = () => {
    const {forecast, isLoading, isError} = useGlobalContext();

    if (isLoading) {
        return null;
    }

    if (isError) {
        return <div>Something went wrong.</div>
    }

    const { forecastday } = forecast;
    
    const { hour } = forecastday[0];

    return (
    <swiper-container
        slides-per-view="auto"
        space-between="0"
    >
        {(hour?.map((singleHour, i) => {
            return <swiper-slide key={i}>

                <Hour {...singleHour}/>

            </swiper-slide>
        }))}

    </swiper-container>
    
    );
    
}

export default HourCarousel;