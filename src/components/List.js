import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

    render() {
        return (
            <ul className="List">
                {this.props.posts.map(post =>
                    <List key={post.data.url} post={post} />
                )}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }

}

export default connect(mapStateToProps)(List);
