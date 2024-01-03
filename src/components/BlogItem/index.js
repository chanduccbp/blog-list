// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog">
      <div className="blog-head">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-para">{publishedDate}</p>
      </div>
      <p className="blog-para">{description}</p>
    </li>
  )
}

export default BlogItem
