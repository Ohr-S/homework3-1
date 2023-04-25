import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Weather from "./Weather";

function App() {

    const [weather, setWeather] = useState(); //define state to componenet
    const [city, setCity] = useState("London"); //define state to componenet
    useEffect(() => {
        const API_KEY = ''
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        axios.get(url).then(result => {
            if (result.status === 200) {
                setWeather(result.data)
            }
        })
    }, [city])

    const search = e => {
        if (e.keyCode == 13) {
            setCity(e.target.value)
        }
    }

    return (
        weather ? <div className="App">
            <input placeholder='Enter city name' onKeyDown={search}/>
            <Weather city={city} weather={weather} />
        </div> : <div>Loading...</div>
    );
}

export default App;




