
import {
  CurrentDay,
  CityForm,
  HourCarousel,
} from "./util";

import { useGlobalContext } from "./context/appContext";

function App() {
  const { currentWeather } = useGlobalContext();

  return <div className={`weatherapp ${currentWeather} flex flex-col flex-1 xl:p-[6%]`}>

    <main className=" flex-1 flex flex-col relative rounded-[12px] xl:border-2 border-dashed border-gray-200">
      <CityForm/>
      <CurrentDay/>
      <HourCarousel />
    </main>
  </div>
}

export default App;
