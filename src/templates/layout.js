import React from "react"

import Nav from "../components/nav"
import Footer from "../components/footer"

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
