import React from 'react';
import satellite from '../../img/satellite.webp';

function Random() {
    return (
        <main>
        <div class="controls controls--stats container">
            <p>
                Count:
                <span id="count" class="control">0</span>
            </p>
            <form id="form" class="form">
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

                <li class="first-card card card--not-found">
                    <img
                        class=""
                        src={satellite}
                        alt=""
                        width="100"
                        height="100"
                    />
                    <p>Start exploring!</p>
                </li>
            </ul>
        </section>
    </main>
    );
}

export default Random;
