
import React from "react";
import CreatePost from "./PostCreate";
import PostList from "./PostLists";

const App = () => {
  return (
    <div className="container py-4">
      {/* Create Post Section */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="p-4 bg-white border rounded-3 shadow-sm">
            <h2 className="h4 mb-3">Create a Post</h2>
            <CreatePost />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-5" />

      {/* Posts Section */}
      <div className="row">
        <div className="col-12">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default App;
