import React from 'react';
import satellite from '../../img/satellite.webp';

function Date() {
    return (
        <main>
            <div class="controls container">
                <form id="form" class="form">
                    <label for="from-date">Date:</label>
                    <input
                        type="date"
                        id="from-date"
                        name="from-date"
                        class="control"
                        required
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

                    <li class="card card--not-found">
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

export default Date;
