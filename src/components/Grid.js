import React, { Component } from 'react';
import RedditData from "../reducers";
import {connect} from 'react-redux';

class Grid extends Component {

  render() {
    return (
      <div className="Grid">
        {this.props.posts}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Grid);
