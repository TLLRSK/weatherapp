import { HourSignage } from "../util";

const Hour = (hour) => {
    const {time, temp_c} = hour;
    const formattedTime = time.split(' ').pop();
    
    return <li className="hour-container p-2">

        <p>{temp_c}°C</p>

        <HourSignage {...hour}/>

        <p>{formattedTime}</p>
    </li>
}
export default Hour;