import { useEffect, useState } from "react"
import Forecast from "./components/Forecast"
import Inputs from "./components/Inputs"
import TempAndDetails from "./components/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import getFormattedWeatherData from './services/weatherService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader"

const App = () => {

  const [query, setQuery] = useState({ q: 'nagpur' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {

    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching Weather data for ${cityName}`)

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched Weather data for ${data.name}, ${data.country}`)
      setWeather(data);
    })
    console.log(data);
  }

  useEffect(() => {
    getWeather();
  }, [query, units])

  console.log(weather)
  const formatBackground = () => {
    if (!weather) return 'from-cray-600 to-blue-700'
    const threshold = units === "metric" ? 30 : 90;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-700";
    return "from-yellow-600 to-orange-700";
  }

  return (
    (!weather) ? (<Loader />) :
      <div className={`mx-auto max-w-screen-lg sm:mt-4 py-5 md:px-32 px-2 bg-gradient-to-br
    shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} />

        {
          weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title="3 hour step forecast" data={weather.hourly} />
              <Forecast title="daily forecast" data={weather.daily} />
              <br />
              <hr className="mt-4"/>
              <p className="flex flex-row justify-center text-center">Design and Developed By <span className="ml-2 text-yellow-400 cursor-pointer"> Hrishikesh Deshmukh</span></p>
            </>
          )
        }

        <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />

      </div>
  )
}

export default App
