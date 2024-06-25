import { HourSignage } from "../util";

const Hour = (hour) => {
    const {condition, time, temp_c} = hour;
    const formattedTime = time.split(' ').pop();
    
    return <li className="hour-container h-full p-2 flex flex-col items-center justify-between l:p-3">

        <p className="text-s font-bold">{temp_c}°</p>

        <HourSignage {...condition}/>

        <p className="text-s">{formattedTime}</p>
    </li>
}
export default Hour;