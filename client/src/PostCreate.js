import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const res = await axios.post("http://localhost:4000/posts", newPost);

    if (res?.data) {
      alert("Post created successfully");
    } else {
      alert("Failed to create post");
    }
    // Reset form
    setTitle("");
    setContent("");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4>Create a New Post</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Content Input */}
            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your post content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
