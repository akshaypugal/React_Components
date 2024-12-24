import React, { useState } from 'react';

const Quote = () => {
    const [data, setData] = useState(null); // data should be an object, not an array
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const API_key = '5e37a870b96e22ecd29072efcf808944';

    const getData = async () => {
        if (value) { // Only fetch data if value is not empty
            setLoading(true); // Set loading state to true before fetching
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_key}`);
            const result = await response.json();
            setData(result); // Store the weather data in state
            setLoading(false); // Set loading state to false after fetching
        }
    };

    return (
        <div>
            <label>
                Enter Your City : 
                <input 
                    type='text' 
                    onChange={(e) => setValue(e.target.value)} 
                    value={value} // Add value to the input to control the input
                />
            </label>
            
            {/* Add button to trigger the API call */}
            <button onClick={getData}>Get Weather</button>
            
            {/* Loading state */}
            {loading && <p>Loading...</p>}

            {/* Render weather data */}
            {data && data.weather ? (
                <h1>
                    {data.weather.map((m, index) => (
                        <ul key={index}>
                            <li>{m.main}</li> {/* Display weather main description */}
                        </ul>
                    ))}
                </h1>
            ) : (
                <p>No data available</p> // In case there is no weather data yet
            )}
        </div>
    );
};

export default Quote;
