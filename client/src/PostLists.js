import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCards"; // ensure this uses plain Bootstrap classes
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:6080/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const isEmpty = Object.keys(posts).length === 0;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Posts</h1>

      {isEmpty ? (
        <div className="text-muted">No posts available.</div>
      ) : (
        <div className="row g-4">
          {Object.values(posts).map((post) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={post.id}>
              <PostCard
                id={post.id}
                title={post.title}
                content={post.content}
                comments={post.comments}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
