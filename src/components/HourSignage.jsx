import {useConditionCodes} from "../util";

const HourSignage = (condition) => {
    const {conditionText, iconUrl} = useConditionCodes(condition);

    return <div className="signage--hour flex flex-col items-center justify-center w-4 h-4">
        <img src={iconUrl} alt={conditionText} className="w-[50%]"/>
    </div>
}
export default HourSignage;