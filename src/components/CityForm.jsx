import { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import { IconSearch } from "../util";

const CityForm = () => {
    const [cityValue, setCityValue] = useState('');

    const submitCity = (e) => {
        e.preventDefault();
        setCity(cityValue)
        e.target.city.value = '';
    }
    const changeInputValue = (e) => {
        setCityValue(e.target.value);
    }

    const {setCity} = useGlobalContext();

    return <div className="form-container flex flex-col p-2 l:p-3 l:absolute l:right-[0]">
        <form onSubmit={submitCity} className="city-form flex items-center gap-1 z-10 left-2 right-2" >

            <label className="uppercase text-m">City:</label>

            <input 
                onChange={(e) => changeInputValue(e)}
                type="text" 
                name="city" 
                id="city" 
                className="text-m uppercase bg-transparent border-b-2 border-gray-200 border-dashed color-primary flex-1 focus:outline-none focus:bg-transparent"
            />
            <button 
                type="submit"
                className="group w-3 h-3 flex items-center justify-center text-m uppercase rounded-full"
                disabled={!cityValue.trim()}>
                    
                <IconSearch className={"fill-secondary group-disabled:fill-gray-200"}/>

            </button>
        </form>
    </div>
}
export default CityForm;