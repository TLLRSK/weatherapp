import {useConditionCodes, Signage} from "../util";

const CurrentSignage = (data) => {

    const signages = useConditionCodes(data);

    return  <div className="signage--current flex-1 flex flex-col justify-center">
        <Signage signages={signages}/>
    </div>
}
export default CurrentSignage;