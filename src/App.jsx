
import {
  CurrentDay,
  CityForm,
  HourCarousel
} from "./util";

function App() {
  return (
    <main className="weatherapp bg-primary h-lvh flex flex-col">
      <CityForm/>
      <CurrentDay/>
      <HourCarousel />
    </main>
  );
}

export default App;
