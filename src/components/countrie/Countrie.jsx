import { useState } from 'react';
import './countrie.css'
const Countrie = ({countrie}) => {
    const {name,flags,population,area,cca3} = countrie;

    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`box ${visited && 'visited'}`}>
            <h3 style={{color: visited ?'purple' : 'white'}}>Name :{name?.common}</h3>
            <h4>Name Official : {name.official}</h4>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p>Area : {area}</p>
            <p><small>Code :{cca3}</small></p>
            <button onClick={handleVisited}>{visited?'Visited' : 'Going'}</button>
           {visited? 'I have visited': 'I want to visit'}

        </div>
    );
};

export default Countrie;
