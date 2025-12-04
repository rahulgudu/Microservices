import axios from "axios";
import React, { useState } from "react";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>New Comment</label>
        <input
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreateComment;
