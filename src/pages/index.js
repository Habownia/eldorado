import React, { useRef } from "react"

import Layout from "../templates/layout"
import Hero from "../components/hero"
import Posts from "../components/posts"
import { Seo } from "../components/seo"

export default function Home() {
  const post = React.createRef()

  function handleScroll() {
    post.current.scrollIntoView()
  }
  return (
    <Layout>
      <Hero handleScroll={handleScroll} />
      <Posts post={post} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
