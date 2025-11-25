import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_HGBRASIL_APIKEY;

function App() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=Florianópolis,SC`);
                const data = await response.json();
                if (data.results) {
                    setWeather(data.results);
                    // console.log(data);
                }
            } catch (erro) {
                console.error('Erro ao buscar dados da API', erro);
            }
        };
        fetchWeather();
        }, []);
    //=====================================================
    return (
        <div className="app-container">
            <SearchBar />
            {weather && <>
                <h1>{weather.city}</h1>
                <WeatherCard weather={weather} />

            </>}
        </div>
    );
};
export default App;
