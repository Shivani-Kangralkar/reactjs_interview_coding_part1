import React, { useState } from "react";
import Comment from "./Comment";

const NestedComment = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "This is first comment of shivani",
      children: [
        {
          id: 2,
          title: "This is child comment one",
          children: [],
        },
        {
          id: 3,
          title: "This is child comment two",
          children: [],
        },
        {
          id: 4,
          title: "This is child comment three",
          children: [],
        },
      ],
    },
  ]);

  const handleAddReply = (getCurrentParentId, getCurrentParentReply) => {
    // console.log(getCurrentParentId,getCurrentParentReply);

    let updatedComment = [...comments]
    handleAddNewComment(updatedComment, getCurrentParentId,getCurrentParentReply)
    // console.log("comments", updatedComment);
    setComments(updatedComment)
  }

  const handleAddNewComment = (updatedComment,getCurrentParentId,getCurrentParentReply) => {
    // console.log(getCurrentParentId,getCurrentParentReply, updatedComment);
    // console.log("updatedComment", updatedComment);
    // console.log("getCurrentParentReply", getCurrentParentReply);
    // console.log("getCurrentParentId", getCurrentParentId);
      for(let i =0; i < updatedComment.length;i++){

        let comment = updatedComment[i];
        if(comment.id === getCurrentParentId) {
          // console.log("comment", comment.id);
          comment.children.unshift(newComment(getCurrentParentReply))
        }
      }

      for(let i =0 ; i < updatedComment.length;i++){
        let comment = updatedComment[i];
        handleAddNewComment(comment.children,getCurrentParentId,getCurrentParentReply)
      }
  }

  function newComment(text) {
    // console.log("text", text);
    return {
      id: new Date().getTime(),
      title: text,
      children: [],
    };
  }

  return (
    <div className="nested-comments-container">
      <h1>Nested Comment</h1>
      <div className="comment-wrapper">
        <textarea
          row={5}
          cols={100}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <br />
        <button
          onClick={() => {
            setComments([newComment(inputValue), ...comments]);
            setInputValue("");
          }}
        >
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((item)=>(
          <Comment key={item.id} handleAddReply={handleAddReply} comment={item} />
        ))}
      </ul>
    </div>
  );
};

export default NestedComment;
