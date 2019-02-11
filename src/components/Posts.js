import React, { Component } from 'react'
import {connect} from 'react-redux'
import PostForm from './PostForm'
//import {GET_POSTS} from '../actions/types'
import {postsAction} from '../actions/postsAction'

class Posts extends Component {
  componentDidMount(){
    console.log(this.props)
  // this.props.postsAction()
   
  }

  render() {
    
    return (
      <div className="posts-container">
      <PostForm />
         {/*this.state.posts.map(elm=>{
           return <div key={elm.id}className="post-container">
            <h2>{elm.title}</h2>
            <p>{elm.body}</p>
           </div>
         })*/}
         
      </div>
    )
  }
}

const mapStateToProps = state =>{
   return({
    posts : state.posts.posts
   })    
  }

const mapDispatchToProps = dispatch => {
  return{
      getPosts : dispatch(postsAction())
  }
}

const PostsConnect = connect(mapStateToProps,mapDispatchToProps)(Posts)
export default PostsConnect