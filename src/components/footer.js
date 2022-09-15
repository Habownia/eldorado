import React from "react"

import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

function Footer() {
  return (
    <footer class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
      <span class="text-sm text-center text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Habownia™
        </a>
        . All Rights Reserved.
      </span>
      <div class="flex flex-wrap gap-3 items-center self-center mt-3 text-sm text-gray-400 sm:mt-0">
        <a href="#" class="mr-4 mt-2 hover:scale-110 md:mr-6 ">
          <AiFillGithub size={40} />
        </a>

        <a href="#" class="mr-4 mt-2 hover:scale-110 md:mr-6">
          <AiOutlineInstagram size={40} />
        </a>

        <a href="#" class="mr-4 mt-2 hover:scale-110 md:mr-6">
          <MdEmail size={40} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
