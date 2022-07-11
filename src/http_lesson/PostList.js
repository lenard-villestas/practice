import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: 'No Error'
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    error:'Error Error'
                })
            })
    }
    render() {
        let { posts } = this.state;

        

        return (
            <div> <h1>List of posts</h1>

                {posts.length ?
                    posts.map(post => <div key={post.id}> {post.title} </div>):null}

                    <h2>{this.state.error}</h2>
            </div>



        )
    }


}


export default PostList