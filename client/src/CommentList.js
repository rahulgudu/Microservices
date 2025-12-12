/* eslint-disable react-hooks/exhaustive-deps */

const CommentList = ({ comments }) => {
  
  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
