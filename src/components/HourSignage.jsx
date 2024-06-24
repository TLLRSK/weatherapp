import {useConditionCodes, Signage} from "../util";

const HourSignage = (condition) => {

    const {conditionText} = useConditionCodes(condition);

    return <div className="signage--hour flex flex-col justify-center">
        <Signage condition={conditionText}/>
    </div> 

}
export default HourSignage;