import { HourSignage } from "../util";

const Hour = (hour) => {
    const {condition, time, temp_c} = hour;
    const formattedTime = time.split(' ').pop();
    const hourData = {condition, temp_c};
    
    return <li className="hour-container h-full pt-1 pb-1 l:p-1 flex flex-col items-center justify-between">

        <p className="text-s font-bold">{temp_c}°</p>

        <HourSignage {...hourData}/>

        <p className="text-s">{formattedTime}</p>
    </li>
}
export default Hour;