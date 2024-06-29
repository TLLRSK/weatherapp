const useConditionCodes = (data) => {
    const code = data.condition.code;
    const temp = data.temp_c;
    const conditionCodes = {
        sunny: ["1000"],
        partlyCloudy: ["1003"],
        cloudy: ["1006", "1009"],
        partlyRainy: ["1150", "1153", "1063", "1180", "1183", "1186", "1189", "1240", "1243", "1273"],
        rainy: ["1192", "1195", "1198", "1201", "1246", "1276"],
        misty: ["1030", "1135", "1147"],
        sleety: ["1069", "1204", "1207", "1249", "1252", "1261"],
        snowy: ["1066", "1114", "1210", "1213", "1216", "1219", "1222", "1225", "1237", "1279", "1282"],
    }
    
    const getConditionText = (code) => {
        const codeString = code.toString();
        for(const [key, values] of Object.entries(conditionCodes)) {
            if (values.includes(codeString)) {
                return key;
            }
        }
        return 'unknown';
    }

    const getSignages = (conditionText) => {
        switch (conditionText) {
            case "sunny":
                return temp < 30 ? ["sunny-0", "sunny-100"] : ["sunny-100", "hot"];
            case "partlyCloudy":
                return ["sunny-0", "cloudy"];
            case "cloudy":
                return ["cloudy", "cloudy"];
            case "partlyRainy":
                return ["cloudy", "rainy"];
            case "rainy":
                return ["rainy"];
            case "misty":
                return ["misty"];
            case "sleety":
                return ["rainy", "snowy"];
            case "snowy":
                return ["snowy"];
        }
    }
    const conditionText = getConditionText(code);
    const signages = getSignages(conditionText);
    return signages;
}
export default useConditionCodes;