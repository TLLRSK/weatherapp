import Signage from "./Signage";

const HourSignage = (hour) => {

    const code = hour.condition.code;

    const conditionCodes = {
        sunny: ["1000"],
        partlyCloudy: ["1003"],
        cloudy: ["1006", "1009"],
        partlyRainy: ["1153", "1063", "1180", "1183", "1186", "1189", "1240", "1243", "1273"],
        rainy: ["1192", "1195", "1198", "1201", "1246", "1276"],
    }
    
    const getConditionText = (code) => {
        const codeString = code.toString();
        console.log("codeString: ", codeString)
        for(const [key, values] of Object.entries(conditionCodes)) {
            if (values.includes(codeString)) {
                return key;
            }
        }
        return 'unknown';
    }

    const conditionText = getConditionText(code);

    return <div className="signage--hour flex flex-col">
        <Signage condition={conditionText}/>
    </div> 

}
export default HourSignage;