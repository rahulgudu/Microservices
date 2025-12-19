/* eslint-disable react-hooks/exhaustive-deps */

const CommentList = ({ comments }) => {
  const comment = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This is awaiting for approval";
    }
    if (comment.status === "rejected") {
      content = "This is rejected";
    }
    return content;
  });
  console.log(comment);
  
  return (
    <ul>
      {comment?.map((comment, idx) => {
        return <li key={idx}>{comment}</li>;
      })}
    </ul>
  );
};

export default CommentList;
