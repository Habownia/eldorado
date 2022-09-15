import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

// import Head from "../components/head"
import Layout from "./layout"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            width
            height
            publicUrl
            url
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
`

function Blog({ data }) {
  // const image = useRef(null)
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },

      [BLOCKS.EMBEDDED_ASSET]: node => {
        const image = getImage(node.data.target.gatsbyImageData)
        const images = (
          <>
            <GatsbyImage image={image} alt="zdjecie" className="img-blog" />
          </>
        )
        return images
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="p-2">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className=" list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className=" list-decimal py-3">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="ml-10">{children}</li>
      ),
    },
  }

  const images = renderRichText(data.contentfulBlogPost.body, options).map(
    elem => {
      if (typeof elem.type === "symbol") {
        console.log(elem)
        return (
          <GatsbyImage
            key={elem.key}
            image={getImage(elem.props.children.props.image)}
            alt="zdjecie"
            className=" max-w-lg"
          />
        )
      }
    }
  )

  const text = renderRichText(data.contentfulBlogPost.body, options).map(
    elem => {
      if (typeof elem.type !== "symbol") {
        return elem
      }
    }
  )

  return (
    <Layout>
      <main className="flex flex-col px-10">
        <div className="flex gap-4 items-center my-5">
          <h1 className=" text-2xl font-bold">
            {data.contentfulBlogPost.title}
          </h1>
          <span>{data.contentfulBlogPost.publishedDate}</span>
        </div>
        <div>{text}</div>
        <div className="flex flex-wrap justify-center gap-10 pb-10">{images}</div>
      </main>
    </Layout>
  )
}

export default Blog
