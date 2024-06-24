import {useConditionCodes, Signage} from "../util";

const CurrentSignage = (condition) => {

    const {conditionText} = useConditionCodes(condition);

    return  <div className="signage--current flex-1 flex flex-col justify-center">
        <Signage condition={conditionText}/>
    </div>
}
export default CurrentSignage;