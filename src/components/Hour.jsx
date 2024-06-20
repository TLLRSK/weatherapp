const Hour = (hour) => {
    const {time, temp_c, condition} = hour;
    const formattedTime = time.split(' ').pop();

    return <li className="hour-container">

        <p>{temp_c}</p>

        <img src={condition.icon} alt="condition.text" />

        <p>{formattedTime}</p>
    </li>
}
export default Hour;