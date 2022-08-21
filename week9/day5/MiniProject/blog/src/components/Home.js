import blog from "../assets/blog.png"
import React from "react"
import { connect } from "react-redux"
import {Link} from 'react-router-dom'

class Home extends React.Component {


    render(){

        const article = this.props.post.map((post,i) => {
            return (
                <div key={post.id}>
                    <img src={blog} alt="Blog"/>
                    <Link to={'/' + post.id}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.body}</p>
                </div>
            )
        })
      
        const long = this.props.post.length

        return(
            <div>
                <h1>Home</h1>
                {long > 0 ? article : <h1>No post to show</h1>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      post:state.posts
    }
  }
  
export default connect(mapStateToProps)(Home)
