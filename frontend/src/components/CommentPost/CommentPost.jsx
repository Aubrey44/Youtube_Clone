import React from "react";
import "./CommentPost.css";
import useForm from "../../utils/useForm";

const CommentPost = () => {
  const { formValues, handleChange, handleSubmit } = useForm();

  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <label>Comment</label>
        <input
          type="text"
          name="comment"
          onChange={handleChange}
          value={formValues.comment}
        />

        <button className='comment-button'type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentPost;

// Line 11: // required={true}
