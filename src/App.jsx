
import {
  CurrentDay,
  CityForm,
  HourCarousel
} from "./util";

function App() {
  return <div className="weatherapp flex flex-col overflow-hidden rounded-[12px] flex-1 xl:m-[6%] xl:ml-[12%] xl:mr-[12%]">

    <main className=" flex-1 flex flex-col relative">
      <CityForm/>
      <CurrentDay/>
      <HourCarousel />
    </main>
  </div>
}

export default App;
