import React, { useRef, useState, useEffect } from "react"

import { Link } from "gatsby"
import { AiFillCloseCircle } from "react-icons/ai"

function Nav() {
  const ul = useRef(null)
  const [show, setShow] = useState(true)

  function showBurger() {
    setShow(prevState => !prevState)
  }

  // build bug
  if (typeof window !== `undefined`) {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
      function watchWidth() {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener("resize", watchWidth)

      return function () {
        window.removeEventListener("resize", watchWidth)
      }
    }, [])

    useEffect(() => {
      if (windowWidth > 639) {
        setShow(true)
      } else {
        setShow(false)
      }
    }, [windowWidth])
  }

  return (
    <div className="fixed h-16 text-gray-400 navbar bg-base-100 z-50">
      <div className="flex-1">
        <Link to="/" className="text-xl normal-case btn btn-ghost">
          TrzycierzBlog
        </Link>
      </div>
      <div className="flex-none">
        <button className="block sm:hidden btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
            onClick={showBurger}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          className={`absolute flex flex-col items-center justify-center h-64 gap-3 p-5 rounded-lg sm:flex-row top-2 right-2 sm:static menu menu-horizontal sm:p-0 bg-slate-800 sm:bg-inherit w-52 sm:w-auto sm:h-auto z-50 ${
            show ? "flex" : "hidden"
          }`}
          ref={ul}
        >
          <AiFillCloseCircle
            size={30}
            className="absolute top-2 right-2 sm:hidden"
            color="rgb(167 139 250)"
            onClick={showBurger}
          />
          <li>
            <Link
              to="/"
              className="btn btn-ghost"
              activeClassName="bg-violet-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="btn btn-ghost"
              activeClassName="bg-violet-600"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="btn btn-ghost"
              activeClassName="bg-violet-600"
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
