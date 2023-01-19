import profiles from '../data/berlin.json';
import { useState } from 'react';

function FaceBook () {

    const countryList = profiles.map((profile) => profile.country);

    const countrySelect = (event) => {
        setSelectedCountry(event.target.value)
    };

    const [selectedCountry, setSelectedCountry] = useState("");

    const countrySelector = countryList.sort().map((country, i) => {
        return (
            <div>
                <button 
                key={i} 
                value={country} 
                onClick={countrySelect}
                style={{ backgroundColor:selectedCountry === country ? "blue" : "white"}}
                >
                {country}
                </button>
            </div>
        )
    })

    const profileArray = profiles.map((person, i) => {
        return (
            <li key={i}>
             <div
             style={{ backgroundColor:person.country === selectedCountry ? "blue" : "white"}}>
                <div>
                    <img src={person.img} alt={person.firstName}/>
                </div>
                <div>
                    <p><b>First Name:</b> {person.firstName}</p>
                    <p><b>Last Name:</b> {person.lastName}</p>
                    <p><b>Country:</b> {person.country}</p>
                    <p><b>Type:</b> { person.isStudent ? "Student" : "Teacher" }</p>
                </div>
             </div>
            </li>
        )
    })

    return (
        <div>
            <button
                value=""
                onClick={countrySelect}
                style={{ backgroundColor:selectedCountry === "" ? "blue" : "white"}}
                >
                All Countries
            </button>
            {countrySelector}
           {profileArray}
        </div>
    )
}

export default FaceBook;