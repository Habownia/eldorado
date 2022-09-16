import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import kapliczka from "../image/kapliczka.jpg"

function Hero(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${kapliczka})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="md:w-max mb-5 text-3xl md:text-4xl font-bold">
            {data.site.siteMetadata.title} - trzycierski blog
          </h1>
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
