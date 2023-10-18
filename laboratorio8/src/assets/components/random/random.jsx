import React, { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter, useNavigate, Navigate } from 'react-router-dom';
import Card from '../card/card';
import NotFoundCard from '../cardNotFound/cardnotFound';

const baseUrl = 'https://api.nasa.gov';
const API_KEY = 'gsHEIX64vQwXc9AgsH8prXXcWWqTV1Yv0duvIjfc';

function Random() {

    const [dataApi, setDataApi] = useState([]);
    const [count, setCount] = useState(0);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        // Este efecto se ejecuta cada vez que dataApi cambia.
        // Puedes realizar acciones adicionales aquí si es necesario.
        console.log(dataApi);
        setCount(dataApi.length);

    }, [dataApi]);

    const getData = async (e) => {
        e.preventDefault();

        const queryParams = new URLSearchParams();
        queryParams.append("api_key", API_KEY);
        queryParams.append("count", "1");
        queryParams.append("thumbs", "true");

        const urlWithParams = `${baseUrl}/planetary/apod?${queryParams.toString()}`;

        try {
            const response = await fetch(urlWithParams);
            console.log(response.status);

            // Check if the HTTP response is successful
            if (response.ok) {
                // Parse the response as JSON
                const data = await response.json();
                setIsHidden(false);
                console.log(data);
                //loading(true);
                //displayData(data[0]); // Add the new element to the list
                setDataApi([...dataApi, data[0]]);

            } else if (response.status === 400 || response.status === 404) {

                // Throws an error with the API's error message.
                const errorData = await response.json();
                throw new Error(`The request was not successful: ${errorData.msg}`);

            } else {
                throw new Error(`The request was not successful`);
            }

        } catch (error) {
            // Catch and handle errors
            //loading(true);
            //showErrorAlert(error);
            console.error("An error occurred:", error);
        }
    }

    const handleClick = (element) => {
        console.log(element.date);
    }

    return (
        <div>
            <div class="controls controls--stats container">
                <p>
                    Count:
                    <span id="count" class="control">{count}</span>
                </p>
                <form id="form" class="form" onSubmit={getData}>
                    <button type="submit" id="btn-explore" class="control">
                        Explore
                    </button>
                </form>
            </div>

            <section
                class="image-section"
                role="status"
                aria-live="polite"
                aria-relevant="additions"
            >
                <h2 class="sr-only">
                    List of image of Astronomy picture of the day
                </h2>
                <ul class="card-list container" id="container-cards">

                    {dataApi.map((element) => (
                        <div onClick={() => handleClick(element)}>
                            <Card element={element} key={element.date}/>
                        </div>
                    ))}

                    {isHidden && <NotFoundCard />}
                </ul>
            </section>
        </div>

    );
}

export default Random;
