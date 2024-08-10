import "./App.css";
import { useState } from "react";
import CitySelector from "./components/citySelector";
import CityCard from "./components/cityCard";

function App() {
  const [city, setCity] = useState({
    name: "Токио",

    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",

    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",

    facts: [
      "Токио - самый населенный мегаполис в мире.",

      "Здесь расположена самая высокая башня в Японии - Токийская башня.",

      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  });

  function selectCity(newCity) {
    setCity(newCity);
  }
  return (
    <div className="App">
      <h1 className="headerCity">Выберите город:</h1>
      <CitySelector selectCity={selectCity} />
      <CityCard city={city} />
    </div>
  );
}

export default App;
