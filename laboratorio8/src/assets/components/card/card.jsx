import React from 'react';

const Card = ({ element }) => {
  const encodedExplanation = encodeURIComponent(element.explanation);
  const mediaURL = element.mediaURL;

  return (
    <li className="card">
      <div className="card__content">
        <h3 className="card__title">
          <a
            href={`description.html?date=${"element.date"}&explanation=${"encodedExplanation"}&title=${"element.title"}&mediaURL=${"mediaURL"}`}
            className="card__link"
          >
            {"element.title"}
          </a>
        </h3>
        <time className="card__date">{"element.date"}</time>
      </div>
      <img
        className="card__img"
        src='https://png.pngtree.com/png-vector/20190823/ourmid/pngtree-computer-computing-server-cpu-abstract-flat-color-icon-templa-png-image_1696187.jpg'
        alt={"element.title"}
      />
    </li>
  );
};

export default Card;