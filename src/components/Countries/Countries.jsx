import { useEffect } from "react";
import { useState } from "react";
import Countrie from "../countrie/Countrie";
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])
    return (
        <div >
            <h3>Countries :{countries.length}</h3>
           <div className="country-container">
           {
                countries.map(countrie =><Countrie key={countrie.cca3} countrie={countrie}></Countrie>)
            }
           </div>
        </div>
    );
};
export default Countries;