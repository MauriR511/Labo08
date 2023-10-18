import React, { useState } from 'react';
import NotFoundCard from '../cardNotFound/cardnotFound';
import Card from '../card/card';

const baseUrl = 'https://api.nasa.gov';
const API_KEY = 'gsHEIX64vQwXc9AgsH8prXXcWWqTV1Yv0duvIjfc';

function Date() {

    const [data, setData] = useState([]);
    const [fromDateInput, setFromDateInput] = useState('');
    const [isHidden, setIsHidden] = useState(true);

    const handleDateChange = (event) => {
        setFromDateInput(event.target.value);
      };

    const getData = async (e) => {
        e.preventDefault();

        const queryParams = new URLSearchParams();
        queryParams.append("api_key", API_KEY);
        queryParams.append("date", fromDateInput);
        queryParams.append("thumbs", "true");

        const urlWithParams = `${baseUrl}/planetary/apod?${queryParams.toString()}`;

        try {
            const response = await fetch(urlWithParams);
            console.log(response.status);

            // Check if the HTTP response is successful
            if (response.ok) {
                // Parse the response as JSON
                const data = await response.json();
                //loading(true);
                //displayData(data);
                setData([data]);
                setIsHidden(false);

            } else if (response.status === 400 || response.status === 404) {

                // Throws an error with the API's error message.
                const errorData = await response.json();
                throw new Error(`The request was not successful: ${errorData.msg}`);

            } else {
                throw new Error(`The request was not successful`);
            }

        } catch (error) {
            // Catch and handle errors
            loading(true);
            showErrorAlert(error);
            console.error("An error occurred:", error);
        }
    }

    return (
        <main>
            <div class="controls container">
                <form id="form" class="form" onSubmit={getData}>
                    <label for="from-date">Date:</label>
                    <input
                        type="date"
                        id="from-date"
                        name="from-date"
                        class="control"
                        required
                        onChange={handleDateChange}
                    />
                    <button type="submit" class="control">Submit</button>
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
                    {data.map((element) => (
                        <Card element={element} key={element.date} />
                    ))}

                    {isHidden && <NotFoundCard />}
                </ul>
            </section>
        </main>
    );
}

export default Date;
