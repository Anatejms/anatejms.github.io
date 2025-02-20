import * as React from "react"
import { graphql } from "gatsby"
import { Post } from "../types/post"
import Layout from "../layouts"
import Archives from "../components/archives"
import Categories from "../components/categories"
import PopularArticles from "../components/popularArticles"
import TagCloud from "../components/tagCloud"
import AboutAuthor from "../components/aboutAuthor"
import Tags from "../components/tags"
import { getAuthor } from "../services/config"

type BlogPostTemplate = {
  markdownRemark: Post
}

export default function BlogPostTemplate({
  data,
}: {data: BlogPostTemplate}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const author = getAuthor(frontmatter.author);

  return (
    <Layout>
      <div className="hero-wrap js-fullheight" style={{backgroundImage: `url('${frontmatter.featuredImage}')`, height: '60vh'}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="js-fullheight d-flex justify-content-center align-items-center" style={{height: '60vh'}}>
					<div className="col-md-8 text text-center">
						<div className="desc">
							<h1 className="mb-4">{frontmatter.title}</h1>
              <p>{frontmatter.shortDescription}</p>
						</div>
					</div>
				</div>
			</div>
      <section className="ftco-section">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-8">
	            <h2 className="mb-3 font-weight-bold">{frontmatter.title}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
	            <Tags tags={frontmatter.tags} />
	            <AboutAuthor author={author} />
	            
	          </div>
	    			<div className="col-lg-4 sidebar">
	            <Categories />
              <PopularArticles />
	            <TagCloud />
              <Archives />
	          </div>
	    		</div>
	    	</div>
	    </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        category
        shortDescription
        author
        featuredImage
      }
    }
  }
`