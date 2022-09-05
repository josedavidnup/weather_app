import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import style from "./App.module.css";

const API_KEY = process.env.REACT_APP_APIKEY;

function App() {
  const [cities, setCities] = React.useState([]);
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const repeatedCity = cities.find((city) => city.id === ciudad.id);
          if (!repeatedCity) {
            setCities((oldCities) => [...oldCities, ciudad]);
          } else {
            alert("La Ciudad ya se encuentra agregada");
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  return (
    <div className={style.app}>
      <header className={style.header}>
        <SearchBar onSearch={(ciudad) => onSearch(ciudad)} />
      </header>
      <main className={style.main}>
        <section className={style.mainCity}>
          {cities.length ? (
            <Card
              max={cities[cities.length - 1].max}
              min={cities[cities.length - 1].min}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}
              main={true}
            />
          ) : (
            <span>No hay ciudades aun</span>
          )}
        </section>
        <section className={style.reelCities}>
          <Cards cities={cities} onClose={onClose} />
        </section>
      </main>
    </div>
  );
}

export default App;
