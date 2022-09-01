import './PostCourse.css'
import './ResponsiveBlogCard.css'

export const PostClass = (props) => {
    return (
        <div className="PostBlog">
            <div className="topBlog">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="middleBlog">
                <h2>{props.title}</h2>
            </div>
            {/* <div className="botBlog">
                <div className="botProfile">
              
                </div> 
            </div>*/}
        </div>
    )
}