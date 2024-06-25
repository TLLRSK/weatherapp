
import {
  CurrentDay,
  CityForm,
  HourCarousel
} from "./util";

function App() {
  return <div className="weatherapp bg-primary flex flex-col overflow-hidden flex-1 sm:m-3 sm:rounded-[12px] l:m-4 xl:m-4 xl:mr-6 xl:ml-6">
    <header className="header bg-gray-200 relative p-1 flex justify-between">
      <h1 className="uppercase text-m font-bold">Weather App</h1>
    </header>
    <main className=" flex-1 flex flex-col">
      <CityForm/>
      <CurrentDay/>
      <HourCarousel />
    </main>
  </div>
}

export default App;
