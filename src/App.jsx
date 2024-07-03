
import {
  CurrentDay,
  CityForm,
  HourCarousel,
} from "./util";

import { useGlobalContext } from "./context/appContext";

function App() {
  const { currentWeather } = useGlobalContext();
  
  return <div className={`weatherapp ${currentWeather} flex flex-col overflow-hidden rounded-[12px] flex-1 xl:m-[6%] xl:ml-[12%] xl:mr-[12%]`}>

    <main className=" flex-1 flex flex-col relative">
      <CityForm/>
      <CurrentDay/>
      <HourCarousel />
    </main>
  </div>
}

export default App;
