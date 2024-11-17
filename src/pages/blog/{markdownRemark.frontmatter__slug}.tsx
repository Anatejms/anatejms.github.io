import * as React from "react"
import { graphql } from "gatsby"
import { Post } from "../../types/post"
import Layout from "../../layouts"
import Archives from "../../components/archives"
import Categories from "../../components/categories"
import PopularArticles from "../../components/popularArticles"
import TagCloud from "../../components/tagCloud"
import AboutAuthor from "../../components/aboutAuthor"
import Tags from "../../components/tags"

type BlogPostTemplate = {
  markdownRemark: Post
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: {data: BlogPostTemplate}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(/static/images/bg_1.jpg)', height: '60vh'}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="js-fullheight d-flex justify-content-center align-items-center" style={{height: '60vh'}}>
					<div className="col-md-8 text text-center">
						<div className="desc">
							<h1 className="mb-4">{frontmatter.title}</h1>
							<p><a href="index" className="btn-custom mr-2">Home <span className="ion-ios-arrow-forward"></span></a> <a href="index" className="btn-custom mr-2">Blog <span className="ion-ios-arrow-forward"></span></a> <a href="index" className="btn-custom">Single <span className="ion-ios-arrow-forward"></span></a></p>
						</div>
					</div>
				</div>
			</div>
      <section className="ftco-section">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-8">
	            <h2 className="mb-3 font-weight-bold">{frontmatter.title}</h2>
	            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
	            <p>
	              <img src="/static/images/image_1.jpg" alt="" className="img-fluid" />
	            </p>
	            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
	            <h2 className="mb-3 mt-5 font-weight-bold">#2. Creative WordPress Themes</h2>
	            <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
	            <p>
	              <img src="/static/images/image_2.jpg" alt="" className="img-fluid" />
	            </p>
	            <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
	            <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
	            <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
	            <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p> */}
              <div
                dangerouslySetInnerHTML={{ __html: html }}
              />
	            <Tags />
	            <AboutAuthor />


	            {/* <div className="pt-5 mt-5">
	              <h3 className="mb-5 font-weight-bold">6 Comments</h3>
	              <ul className="comment-list">
	                <li className="comment">
	                  <div className="vcard bio">
	                    <img src="/static/images/person_1.jpg" alt="Image placeholder"/>
	                  </div>
	                  <div className="comment-body">
	                    <h3>John Doe</h3>
	                    <div className="meta">October 03, 2018 at 2:21pm</div>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
	                    <p><a href="#" className="reply">Reply</a></p>
	                  </div>
	                </li>

	                <li className="comment">
	                  <div className="vcard bio">
	                    <img src="/static/images/person_1.jpg" alt="Image placeholder"/>
	                  </div>
	                  <div className="comment-body">
	                    <h3>John Doe</h3>
	                    <div className="meta">October 03, 2018 at 2:21pm</div>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
	                    <p><a href="#" className="reply">Reply</a></p>
	                  </div>

	                  <ul className="children">
	                    <li className="comment">
	                      <div className="vcard bio">
	                        <img src="/static/images/person_1.jpg" alt="Image placeholder"/>
	                      </div>
	                      <div className="comment-body">
	                        <h3>John Doe</h3>
	                        <div className="meta">October 03, 2018 at 2:21pm</div>
	                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
	                        <p><a href="#" className="reply">Reply</a></p>
	                      </div>


	                      <ul className="children">
	                        <li className="comment">
	                          <div className="vcard bio">
	                            <img src="/static/images/person_1.jpg" alt="Image placeholder"/>
	                          </div>
	                          <div className="comment-body">
	                            <h3>John Doe</h3>
	                            <div className="meta">October 03, 2018 at 2:21pm</div>
	                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
	                            <p><a href="#" className="reply">Reply</a></p>
	                          </div>

	                            <ul className="children">
	                              <li className="comment">
	                                <div className="vcard bio">
	                                  <img src="/static/images/person_1.jpg" alt="Image placeholder"/>
	                                </div>
	                                <div className="comment-body">
	                                  <h3>John Doe</h3>
	                                  <div className="meta">October 03, 2018 at 2:21pm</div>
	                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
	                                  <p><a href="#" className="reply">Reply</a></p>
	                                </div>
	                              </li>
	                            </ul>
	                        </li>
	                      </ul>
	                    </li>
	                  </ul>
	                </li>

	                <li className="comment">
	                  <div className="vcard bio">
	                    <img src="/static/images/person_1.jpg" alt="Image placeholder" />
	                  </div>
	                  <div className="comment-body">
	                    <h3>John Doe</h3>
	                    <div className="meta">October 03, 2018 at 2:21pm</div>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
	                    <p><a href="#" className="reply">Reply</a></p>
	                  </div>
	                </li>
	              </ul>
	              
	              <div className="comment-form-wrap pt-5">
	                <h3 className="mb-5">Leave a comment</h3>
	                <form action="#" className="p-3 p-md-5 bg-light">
	                  <div className="form-group">
	                    <label for="name">Name *</label>
	                    <input type="text" className="form-control" id="name">
	                  </div>
	                  <div className="form-group">
	                    <label for="email">Email *</label>
	                    <input type="email" className="form-control" id="email">
	                  </div>
	                  <div className="form-group">
	                    <label for="website">Website</label>
	                    <input type="url" className="form-control" id="website">
	                  </div>

	                  <div className="form-group">
	                    <label for="message">Message</label>
	                    <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
	                  </div>
	                  <div className="form-group">
	                    <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
	                  </div>

	                </form>
	              </div>
	            </div> */}
	          </div>
	    			<div className="col-lg-4 sidebar">
	            <div className="sidebar-box">
	              {/* <form action="#" className="search-form">
	                <div className="form-group">
	                  <span className="icon icon-search"></span>
	                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
	                </div>
	              </form> */}
	            </div>
	            <Categories />
              <PopularArticles />
	            <TagCloud />
							{/* <div className="sidebar-box subs-wrap img" style={{backgroundImage: 'url(/static/images/bg_1.jpg)'}}>
								<div className="overlay"></div>
								<h3 className="mb-4 sidebar-heading">Newsletter</h3>
								<p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia</p>
	              <form action="#" className="subscribe-form">
	                <div className="form-group">
	                  <input type="text" className="form-control" placeholder="Email Address" />
	                  <input type="submit" value="Subscribe" className="mt-2 btn btn-white submit" />
	                </div>
	              </form>
	            </div> */}
	            
              <Archives />
	            {/* <div className="sidebar-box">
	              <h3 className="sidebar-heading">Paragraph</h3>
	              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut.</p>
	            </div> */}
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
      }
    }
  }
`