import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../templates/layout"
import { Seo } from "../components/seo"

import kapliczka from "../image/kapliczka.jpg"

function Blog() {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(fromNow: true)
            body {
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  width
                  height
                  publicUrl
                  url
                  title
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    breakpoints: [750, 1080, 1366, 1920]
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const postsArr = data.allContentfulBlogPost.edges.map(item => {
    let image
    if (item.node.body.references[0]) {
      image = getImage(item.node.body.references[0].gatsbyImageData)
    } else {
      image = false
    }
    return (
      <div className="card w-96 bg-base-100 shadow-xl" key={item.node.id}>
        <figure>
          {image ? (
            <GatsbyImage
              image={image}
              alt={item.node.body.references[0].title}
              className="max-h-60"
            />
          ) : (
            <img src={kapliczka} alt="kapliczka"></img>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.node.title}</h2>
          <p>{item.node.publishedDate}</p>
          <div className="card-actions justify-end">
            <Link to={`/blog/${item.node.slug}`} className="btn btn-primary">
              Zobacz więcej
            </Link>
          </div>
        </div>
      </div>
    )
  })
  return (
    <Layout>
      <h1 className="flex gap-3 justify-center text-3xl font-bold center p-3 tracking-wider">
        <span className="text-[#b0b0b0]">Wszystkie</span>
        <span className="text-gray-400">posty</span>
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 p-5 ">
        {postsArr}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default Blog
