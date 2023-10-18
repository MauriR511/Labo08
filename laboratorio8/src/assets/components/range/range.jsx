import React, { useState } from 'react';
import NotFoundCard from '../cardNotFound/cardnotFound';
import Card from '../card/card';
import LoadingOverlay from '../loading/loading';
import './Range.css';

const baseUrl = 'https://api.nasa.gov';
const API_KEY = 'gsHEIX64vQwXc9AgsH8prXXcWWqTV1Yv0duvIjfc';

function Range() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [data, setData] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  async function getData(e) {
    e.preventDefault();


    const queryParams = new URLSearchParams();
    queryParams.append('api_key', API_KEY);
    queryParams.append('start_date', fromDate);
    queryParams.append('end_date', toDate);
    queryParams.append('thumbs', 'true');

    const urlWithParams = `${baseUrl}/planetary/apod?${queryParams.toString()}`;

    try {
      const response = await fetch(urlWithParams);

      // Check if the HTTP response is successful
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        setData(data);
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
      console.error('An error occurred:', error);
    }
  }

  return (
    <div>
      <div className="controls container">
        <form id="form" className="form" onSubmit={getData}>
          <fieldset className="form__fieldset">
            <legend className="sr-only">Date</legend>

            <label htmlFor="from-date">from:</label>
            <input
              type="date"
              id="from-date"
              name="from-date"
              className="control"
              required
              onChange={handleFromDateChange}
            />
            <label htmlFor="to-date">to:</label>
            <input
              type="date"
              id="to-date"
              name="to-date"
              className="control"
              required
              onChange={handleToDateChange}
            />
          </fieldset>

          <button type="submit" className="control">
            Submit
          </button>
        </form>
      </div>

      <section
        className="image-section"
        role="status"
        aria-live="polite"
        aria-relevant="additions"
      >
        <h2 className="sr-only">
          List of images of Astronomy picture of the day
        </h2>
        <ul className="card-list container" id="container-cards">
          {data.map((element) => (
            <Card element={element} key={element.date} />
          ))}

          {isHidden && <NotFoundCard />}
        </ul>
      </section>
    </div>
  );
}

export default Range;