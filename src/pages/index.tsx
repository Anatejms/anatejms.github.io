import React from "react"
import { graphql } from "gatsby"
import { Post } from "../types/post"
import Layout from "../layouts"
import PostCardComponent from "../components/postCard"
import Hello from "../components/hello"

type Egde = {
  node: Post
}
type IndexPage = {
  data: {
    allMarkdownRemark: {
      edges: Egde[]
    }
  }
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPage) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostCardComponent key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Hello />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 heading-section text-center">
              <h2 className="mb-4">Articles</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
            </div>
          </div>
          <div className="row">
            {Posts}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`