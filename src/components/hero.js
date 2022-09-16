import React from "react"

import kapliczka from "../image/kapliczka.jpg"

function Hero(props) {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${kapliczka})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Witaj na blogu Trzycierza</h1>
          <p className="mb-5">
            Jest to blog pięknej miejscowości Trzycierz, która ma bogatą
            historię, piękne zabytki i wspaniałych ludzi!
          </p>
          <button
            aria-label="new posts"
            className="btn btn-primary"
            onClick={props.handleScroll}
          >
            Najnowsze posty
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
