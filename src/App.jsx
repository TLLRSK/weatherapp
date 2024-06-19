import CityForm from "./components/CityForm";
import { useGlobalContext } from "./context/appContext";

function App() {
  return (
    <main className="weatherapp">
      <CityForm/>
    </main>
  );
}

export default App;
