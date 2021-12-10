import { useEffect, useState } from "react";
import facade from "../apiFacade";

function Zoo({errorMessage, setErrorMessage}) {

const [zoos, setZoos] = useState([]);

const updateZoos = (data) => {
    setZoos(data.zoos);
};

useEffect(() => {
    facade.fetchGET("zoo/all", updateZoos, setErrorMessage)
}, [setErrorMessage]);

    return (
        <div>


<table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Zoo</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
        {zoos.map((zoo) => (<tr key={zoo.id}><td>{zoo.id}</td><td>{zoo.adress}</td><td>{zoo.name}</td></tr>))}
                   
                </tbody>
            </table>
        </div>);



}

export default Zoo;