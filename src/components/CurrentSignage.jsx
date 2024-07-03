import {useConditionCodes} from "../util";

const CurrentSignage = (data) => {

    const {conditionText, iconUrl} = useConditionCodes(data);

    return  <div className="signage--current flex-1 flex flex-col justify-center">
        <img src={iconUrl} alt={conditionText} className="w-6 h-6"/>
    </div>
}
export default CurrentSignage;