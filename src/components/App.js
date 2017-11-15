import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import List from './List';

class App extends Component {
  render() {

    const postItems = this.props.posts.map((post) => (
      <div className="App">
        <List posts={this.props.posts} />
      </div>
    )

    // return (
    //
    // );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App);
