
import React from "react";
import { Card } from "react-bootstrap";
import CreateComment from "../CreateComment";
import CommentList from "../CommentList";

const PostCard = ({ id, title, content }) => {
  return (
    <Card className="h-100 shadow-lg border-0 rounded-3 hover-shadow transition">
      {/* Card Header */}
      <Card.Header className="bg-primary text-white fw-bold fs-5">
        {title}
      </Card.Header>

      {/* Card Body */}
      <Card.Body className="bg-light">
        <Card.Text
          className="text-dark mb-4"
          style={{ whiteSpace: "pre-wrap", fontSize: "1rem", lineHeight: "1.5" }}
        >
          {content}
        </Card.Text>

        {/* Comments Section */}
        <div className="mb-3">
          <h6 className="fw-semibold text-secondary mb-2">Comments</h6>
          <CommentList postId={id} />
        </div>

        {/* Create Comment Form */}
        <CreateComment postId={id} />
      </Card.Body>

      {/* Footer */}
      <Card.Footer className="text-muted small">
        Posted on {new Date().toLocaleDateString()}
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
