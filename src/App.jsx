
import {
  CurrentDay,
  CityForm
} from "./util";

function App() {
  return (
    <main className="weatherapp bg-primary h-lvh flex flex-col">
      <CityForm/>
      <CurrentDay/>
    </main>
  );
}

export default App;
