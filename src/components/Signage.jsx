const Signage = (conditionObject) => {
    const {condition} = conditionObject;
    return (
        condition === 'rainy' || 
        condition === 'cloudy' ? 
        (
            
            <div className="hour-signage flex flex-col">
                <div className={`signage--hour ${condition}`}></div>
            </div>

        ) : (
            <div className="hour-signage flex flex-col">
                <div className={`signage--hour ${condition} translate-y-0`}></div>
                <div className={`signage--hour ${condition} -translate-y-0`}></div>
            </div>
        )
    )
}
export default Signage;