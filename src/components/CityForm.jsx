import { useGlobalContext } from "../context/appContext";

const CityForm = () => {

    const changeCity = (e) => {
        e.preventDefault();
        const newCity = e.target.city.value;
        setCity(newCity)
    }

    const {setCity} = useGlobalContext();


    return <form className="city-form" onSubmit={changeCity}>
        <label>Insert a city:</label>
        <input type="text" name="city" id="city" placeholder="Valencia"/>
        <button type="submit">Submit</button>
    </form>
}
export default CityForm;