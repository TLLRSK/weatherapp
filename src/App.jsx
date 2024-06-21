import {
  CurrentDay,
  CityForm
} from "./util";

function App() {
  return (
    <main className="weatherapp bg-primary">
      <CityForm/>
      <CurrentDay/>
    </main>
  );
}

export default App;
