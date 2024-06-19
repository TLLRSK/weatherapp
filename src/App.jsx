import CityForm from "./components/CityForm";
import { useGlobalContext } from "./context/appContext";

function App() {
  const {city} = useGlobalContext();
  return (
    <main className="weatherapp">
      <CityForm/>
      <h3>{city}</h3>
    </main>
  );
}

export default App;
