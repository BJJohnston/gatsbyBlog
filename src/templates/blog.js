import React from "react"
import { graphql } from "gatsby"
import Nav from '../components/Nav'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return ( 
    <div className="container">
     <Nav />
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-4">{frontmatter.title}</h1>
            <p className="lead">
              by
              <a href="#"> {frontmatter.author}</a>
            </p>
            <hr />
            
            <p>Posted on {frontmatter.date}</p>
            <hr />
            
            <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
            <hr />
            <p dangerouslySetInnerHTML={{ __html: html }}></p>
            <hr />
            <a href="/" className="btn btn-primary">Go Back</a>
          </div>
        </div>
      </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
  `