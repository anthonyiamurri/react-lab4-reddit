import React, { Component } from 'react';

class Post extends Component {

    render() {
        const post = this.props.post;
        // encodeURIComponent makes a string safe to include in a URL since some
        // characters are not allowed in URLs or need to be modified.
        return (
            <li className="Post">
                <p><label>Title:</label> {post.data.title}</p>
                <p><label>Author:</label> {post.data.author}</p>
                <p><label>Thumbnail:</label> {post.data.thumbnail}</p>
                <p><label>Permalink:</label> {post.data.permalink}</p>
                <p><label>url:</label> {post.data.url}</p>
            </li>
        );
    }
}

export default Post;

//   title: post.data.title,
//   author: post.data.author,
//   thumbnail: post.data.thumbnail,
//   permalink: post.data.permalink,
//   url: post.data.url
