import React from "react"

import Nav from "../components/nav"
import Footer from "../components/footer"

function Layout(props) {
  return (
    <div>
      <Nav />
      <div className="min-h-[90vh]">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
