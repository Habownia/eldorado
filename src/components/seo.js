import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import icon from "../../static/favicon.svg"

export const Seo = ({ title, description, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = data.site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
  }

  return (
    <>
      <title>{`${defaultTitle} | ${seo.title}`}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href={icon} />
      <meta name="theme-color" content="#317EFB" />
      {children}
    </>
  )
}
