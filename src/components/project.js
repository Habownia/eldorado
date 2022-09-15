import React from "react"

function Project(props) {
  return (
    <>
      <div
        className={`card w-96 h-60 bg-${props.color} shadow-xl text-gray-900`}
      >
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-actions justify-end ">
            <a
              href={`https://www.${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Zobacz projekt
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
