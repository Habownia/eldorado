import React from "react"

import { Link } from "gatsby"
import { AiFillCloseCircle } from "react-icons/ai"

function Nav() {
  return (
    <div className="navbar bg-base-100 text-gray-400">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">TrzycierzBlog</a>
      </div>
      <div className="flex-none">
        <button className="sm:hidden block btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul className="flex sm:flex-row flex-col gap-3 items-center justify-center absolute top-2 right-2 sm:static menu menu-horizontal sm:p-0 bg-slate-800 sm:bg-inherit w-52 sm:w-auto h-64 sm:h-auto p-5 rounded-lg">
          <AiFillCloseCircle size={30} className="" color="red"/>
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
