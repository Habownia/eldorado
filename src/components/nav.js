import React, { useRef, useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { AiFillCloseCircle } from "react-icons/ai"
import { SiGoldenline } from "react-icons/si"
import { VscThreeBars } from "react-icons/vsc"

function Nav() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [show, setShow] = useState(false)

  function showBurger() {
    setShow(prevState => !prevState)
  }

  return (
    <div className="fixed z-50 h-16 text-gray-400 navbar bg-base-100">
      <div className="flex-1">
        <Link
          to="/"
          className="gap-1 px-3 text-xl normal-case btn btn-ghost text-violet-300"
        >
          <SiGoldenline size={37} className="pr-2" />
          {data.site.siteMetadata.title}
        </Link>
      </div>
      <div className="flex-none">
        <button
          aria-label="burger"
          className="block sm:hidden btn btn-square btn-ghost"
          onClick={showBurger}
        >
          <VscThreeBars size={35} className="m-auto" />
        </button>
        <ul
          className={`absolute sm:flex flex-col items-center justify-center h-52 gap-3 rounded-lg sm:flex-row top-2 right-2 sm:static sm:p-0 bg-slate-800 sm:bg-inherit w-52 sm:w-auto sm:h-auto z-50  ${
            show ? "flex" : "hidden"
          }`}
        >
          <AiFillCloseCircle
            size={30}
            className="absolute text-white top-2 right-2 sm:hidden"
            color="rgb(167 139 250)"
            onClick={() => {
              setShow(false)
            }}
          />
          <li>
            <Link
              to="/"
              className="btn btn-ghost"
              activeClassName="bg-violet-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="btn btn-ghost"
              activeClassName="bg-violet-700"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="btn btn-ghost"
              activeClassName="bg-violet-700"
            >
              Projekty
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
