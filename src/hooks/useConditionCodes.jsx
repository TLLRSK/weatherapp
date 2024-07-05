const useConditionCodes = (data) => {
    const code = data.condition.code;
    const conditionCodes = {
        sunny: ["1000"],
        cloudy: ["1003", "1006", "1009"],
        rainy: ["1150", "1153", "1063", "1180", "1183", "1186", "1189", "1240", "1243", "1273", "1192", "1195", "1198", "1201", "1246", "1276"],
        misty: ["1030", "1135", "1147"],
        snowy: ["1066", "1114", "1210", "1213", "1216", "1219", "1222", "1225", "1237", "1279", "1282", "1069", "1204", "1207", "1249", "1252", "1261"],
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

    const getIconUrl = (conditionText) => {
        const baseUrl = 'images/';
        switch (conditionText) {
            case "sunny":
                return `${baseUrl}sun.png`;
            case "cloudy":
                return `${baseUrl}cloud.png`;
            case "rainy":
                return `${baseUrl}drop.png`;
            case "misty":
                return `${baseUrl}mist.png`;
            case "snowy":
                return `${baseUrl}snow.png`;
        }
    }
    const conditionText = getConditionText(code);
    const iconUrl = getIconUrl(conditionText);
    return {conditionText, iconUrl};
}
export default useConditionCodes;