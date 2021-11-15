import { useEffect, useState } from "react";
import facade from "../apiFacade";

function Animal({ errorMessage, setErrorMessage }) {
  const [animals, setAnimals] = useState([]);

  const updateAnimals = (data) => {
    setAnimals(data.animals);
  };

  useEffect(() => {
    facade.fetchJon("animal/all", updateAnimals, setErrorMessage);
  }, [setErrorMessage]);

  return (
    <div>
      <ul>
 
        {animals.map((animal) => (
          <li key={animal.id}>{animal.race}</li>
        ))}
      </ul>
    </div>
  );
}

export default Animal;
