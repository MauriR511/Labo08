import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ element }) => {
  const encodedExplanation = encodeURIComponent(element.explanation);
  const mediaURL = element.mediaURL;

  return (
    <li className="card">
      <div className="card__content">
        <h3 className="card__title">
          <Link to={`/description/${element.date}`}>
            <a
              href={`description.html?date=${element.date}&explanation=${encodedExplanation}&title=${element.title}&mediaURL=${mediaURL}`}
              className="card__link"
            >
              {element.title}
            </a>
          </Link>
        </h3>
        <time className="card__date">{element.date}</time>
      </div>
      <img
        className="card__img"
        src={element["url"]}
        alt={element.title}
      />
    </li>
  );
};

export default Card;