const Signage = ({signages}) => {
    return (
        signages.length == 1 ?
        (
            <div className={`signage-ellipse--single rounded-full z-10 ${signages[0]}`}></div>
        ) : (
            <>
            <div className={`signage-ellipse--couple rounded-full z-10 ${signages[0]}`}></div>
            <div className={`signage-ellipse--couple rounded-full z-0 ${signages[1]}`}></div>
            </>
        )
    )
}
export default Signage;