import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const {response} = useQuery({
    queryKey: ['forecast'],
    queryFn: async() => {
      const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=VITE_API_KEYq=London&days=3&aqi=no&alerts=no');
      return response;
    } 
  });
  return <main className="weatherapp">
    </main>
}

export default App
