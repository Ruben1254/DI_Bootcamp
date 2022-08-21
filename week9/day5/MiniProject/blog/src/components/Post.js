import React from "react";
import { connect } from "react-redux"

class Post extends React.Component {
    render(){
        console.log(this.props.post)
      
        return(
            <div>
                <h1>Post</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const Pid = ownProps.match.params.post_id
    return {
      post:state.posts.find(post => post.id === Pid)
    }
  }
  
export default connect(mapStateToProps)(Post)