import { useGlobalContext } from "../context/appContext";

const CityForm = () => {

    const changeCity = (e) => {
        e.preventDefault();
        const newCity = e.target.city.value;
        setCity(newCity)
    }

    const {setCity} = useGlobalContext();

    return <div className="form-container flex flex-col p-2">
        <form onSubmit={changeCity} className="city-form flex items-center bg-primary gap-1 z-10 left-2 right-2" >
            <label className="uppercase text-m">City:</label>

            <input 
                type="text" 
                name="city" 
                id="city" 
                className="text-m uppercase border-b-2 border-gray-200 border-dashed color-primary bg-transparent flex-1 focus:outline-gray-100"
            />
            <button type="submit" className="text-m uppercase bg-gray-100 w-3 h-3 rounded-full">Go</button>
        </form>
    </div>
}
export default CityForm;