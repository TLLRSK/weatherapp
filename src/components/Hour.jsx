import { HourSignage } from "../util";

const Hour = (hour) => {
    const {time, temp_c} = hour;
    const formattedTime = time.split(' ').pop();
    
    return <li className="hour-container p-2 flex flex-col items-center">

        <p className="text-s">{temp_c}°C</p>

        <HourSignage {...hour}/>

        <p className="text-s">{formattedTime}</p>
    </li>
}
export default Hour;