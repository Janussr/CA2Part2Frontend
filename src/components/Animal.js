import { useEffect, useState } from "react";
import facade from "../apiFacade";

function Animal({ errorMessage, setErrorMessage }) {
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState({ race: "", age: ""});
  


  const handleInput = (event) => {
    setAnimal({ ...animal, [event.target.id]: event.target.value })
}

  const updateAnimals = (data) => {
    setAnimals(data.animals);
  };

  useEffect(() => {
    facade.fetchGET("animal/all", updateAnimals, setErrorMessage);
  }, [setErrorMessage]);


    const deletedata = ((event) => {
      const id = event.target.id
      facade.fetchDELETE("animal/" + id, updateAnimals, setErrorMessage);
    }, [setErrorMessage]);



const createAnimal =() => {

}


  return (

    <div>
      <div>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Animals</th>
                        <th>Age</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
        {animals.map((animal) => (<tr key={animal.id}><td>{animal.id}</td><td>{animal.race}</td><td>{animal.age}</td><td><button className="btn btn-danger"  onClick={() =>deletedata}>Delete</button></td></tr>))}
                </tbody>
            </table>
        </div>

        <form onChange={handleInput}>
        <input placeholder="race" id="race" />
        <input placeholder="age" id="age" />
        <button onClick={createAnimal}>Create animal</button>
      </form>

    </div>
  );
}

export default Animal;
