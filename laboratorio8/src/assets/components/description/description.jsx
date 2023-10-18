import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import nasaLogo from '../../img/nasa.webp';

const baseUrl = 'https://api.nasa.gov';
const API_KEY = 'gsHEIX64vQwXc9AgsH8prXXcWWqTV1Yv0duvIjfc';

function Description() {

  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const queryParams = new URLSearchParams();
      queryParams.append('api_key', API_KEY);
      queryParams.append('date', id);
      queryParams.append('thumbs', 'true');

      const urlWithParams = `${baseUrl}/planetary/apod?${queryParams.toString()}`;

      try {
        const response = await fetch(urlWithParams);

        // Check if the HTTP response is successful
        if (response.ok) {
          // Parse the response as JSON
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
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

    fetchData();
  }, [id]);

  return (
    <div>
      <div class="description__image">
        <div class="card__content">
          <h3 class="card__title">
            ${data.title}
          </h3>
          <time class="card__date">${data.date}</time>
        </div>
        <img class="card__img" src={data["url"]} alt="${title}" />
      </div>
      <div class="description__content">
        <p>
          ${data.explanation}
        </p>
      </div>
    </div>
  );
}

export default Description;
