import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="p-4 bg-gray-800 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-center text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          {data.site.siteMetadata.author}™
        </a>
        &nbsp;All Rights Reserved.
      </span>
      <div className="flex flex-wrap items-center self-center gap-3 mt-3 text-sm text-gray-400 sm:mt-0">
        <a
          href="#"
          aria-label="github"
          className="mt-2 mr-4 hover:scale-110 md:mr-6 "
        >
          <AiFillGithub size={40} />
        </a>

        <a
          href="#"
          aria-label="instagram"
          className="mt-2 mr-4 hover:scale-110 md:mr-6"
        >
          <AiOutlineInstagram size={40} />
        </a>

        <a
          href="#"
          aria-label="mail"
          className="mt-2 mr-4 hover:scale-110 md:mr-6"
        >
          <MdEmail size={40} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
