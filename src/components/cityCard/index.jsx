import styles from "./styles.module.css";

function CityCard({ city }) {
  const { container, imgStyle } = styles;
  return (
    <div className={container}>
      <h1>{city.name}</h1>
      <img src={city.imageUrl} alt="city" className={imgStyle} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, ind) => {
          return <li key={ind}>{fact}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityCard;
