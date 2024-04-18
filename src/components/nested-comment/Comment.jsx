import React, { useState } from "react";

const Comment = ({ comment, key, handleAddReply }) => {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);
  return (
    <li key={key}>
      <span>{comment.title}</span>
      {!showReplyCommentBox ? (
        <button onClick={() => setShowReplyCommentBox(true)}>Add reply</button>
      ) : null}
      {showReplyCommentBox ? (
        <div>
          <textarea
            rows={2}
            cols={20}
            value={reply}
            onChange={(event) => setReply(event.target.value)}
          />

          <br />
          <div>
            <button
              onClick={() => {
                handleAddReply(comment.id, reply);
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Submit
            </button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {comment && comment.children && comment.children.length > 0 ? (
        <ul>
          {
            comment.children.map((item)=>(
              <Comment handleAddReply={handleAddReply} key={item.id} comment={item}/>
            ))
          }
        </ul>
      ): null}
    </li>
  );
};

export default Comment;
