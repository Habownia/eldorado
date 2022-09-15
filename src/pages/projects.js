import React from "react"

import Layout from "../templates/layout"
import Project from "../components/project"

function Projects() {
  return (
    <Layout>
      <h1 className="flex gap-3 justify-center text-3xl font-bold center p-3 tracking-wider">
        <span className="text-[#b0b0b0] ">Trzycierskie</span>
        <span className="text-gray-400">projekty</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-3 m-5">
        <Project
          title="Trzycierz.tk"
          desc="Prosty projekt z wykorzystaniem HTML, CSS, i JS"
          link="trzycierz.tk"
          color="violet-400"
        />
        <Project
          title="Social Credit Test"
          desc="Test stworzony w Vanilla JS"
          link="trzycierz.tk/sct"
          color="violet-400"
        />
        <Project
          title="TrzycierzPass"
          desc="Trzycierski generator haseł"
          link="trzycierz.tk/pass"
          color="violet-400"
        />
      </div>
    </Layout>
  )
}

export default Projects
