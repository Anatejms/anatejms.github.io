import React from "react"
import { graphql } from "gatsby"
import { Post } from "../types/post"
import Layout from "../layouts"
import PostCardComponent from "../components/postCard"
import Hello from "../components/hello"
import { disconnect } from "process"

type Egde = {
  node: Post
}
type CategoriesPage = {
  data: {
    allMarkdownRemark: {
      edges: Egde[]
    }
  }
}

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { distinct },
  },
}: CategoriesPage) => {
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostCardComponent key={edge.node.id} post={edge.node} />)

  console.log('distinct', distinct);

  return (
    <Layout>
      {/* <Hello /> */}
      <section className="ftco-section-2">
        <div className="photograhy">
          <div className="row no-gutters">
            {distinct.map((category: string, index: number) => {
              console.log()
              return (
                <div className="col-md-3" key={category}>
                  <a
                    href={`/category/${category}`}
                    className="photography-entry img d-flex justify-content-center align-items-center" 
                    style={{backgroundImage: `url(/categories/${category}.jpg)`}}
                  >
                    <div className="overlay"></div>
                    <div className="text text-center">
                      <h3>{category}</h3>
                    </div>
                  </a>
                </div>
              );
            })}
					</div>
				</div>
			</section>
    </Layout>
  );
}

export default CategoriesPage

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
      distinct(field: {frontmatter: {category: SELECT}})
    }
}
`