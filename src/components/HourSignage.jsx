import {useConditionCodes, Signage} from "../util";

const HourSignage = (condition) => {
    console.log("condition: ", condition);
    const signages = useConditionCodes(condition);

    return <div className="signage--hour flex flex-col justify-center">
        <Signage signages={signages}/>
    </div> 

}
export default HourSignage;