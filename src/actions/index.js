import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchPosts() {
  // when using async actions and thunk, instead of returning the action object,
  // we return a callback function. This has a `dispatch` parameter that we
  // can use to dispatch other actions whenever we want.
  return function(dispatch) {
    dispatch(requestPosts());
    $.get("https://www.reddit.com/r/aww.json", function(data) {

      const posts = data.data.children;
      dispatch(receivePosts(posts));

      // var json = data.data.children.map(post => ({
      //   title: post.data.title,
      //   author: post.data.author,
      //   thumbnail: post.data.thumbnail,
      //   permalink: post.data.permalink,
      //   url: post.data.url
      // }));

    });
  }
}

// Allow the reducer to update the state when the request starts loading.
function requestPosts() {
  return {type: "REQUEST_POSTS"}
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receivePosts(posts) {
  return {type: "RECEIVE_POSTS", posts}
}
