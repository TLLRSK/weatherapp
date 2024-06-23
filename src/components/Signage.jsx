const Signage = (conditionObject) => {
    const {condition} = conditionObject;
    return (
        condition === 'rainy' || 
        condition === 'cloudy' ? 
        (
            <div className={`signage ${condition}`}></div>
        ) : (
            <>
            <div className={`signage ${condition}`}></div>
            <div className={`signage ${condition}`}></div>
            </>
        )
    )
}
export default Signage;