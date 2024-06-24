const Signage = (conditionObject) => {
    const {condition} = conditionObject;
    return (
        condition === 'rainy' || 
        condition === 'cloudy' ? 
        (
            <div className={`signage-ellipse--single rounded-full z-10 ${condition}`}></div>
        ) : (
            <>
            <div className={`signage-ellipse--couple rounded-full z-10 ${condition}`}></div>
            <div className={`signage-ellipse--couple rounded-full z-0 ${condition}`}></div>
            </>
        )
    )
}
export default Signage;