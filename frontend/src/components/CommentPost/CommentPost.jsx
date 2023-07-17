import React from "react";
import "./CommentPost.css";
import useForm from "../../utils/useForm";
import axios from "axios";

const CommentPost = ({ id }) => {

  const { formValues, handleChange, handleSubmit } = useForm();

  // const addComment = () => {
  //   try {
  //     let response = axios
  //       .post(`http://127.0.0.1:8000/api/comment/${id}`, formValues)
  //       .then((response) => {
  //         console.log(response.status, response.data.token);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <label>Comment</label>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          value={formValues.text}
        />

        <button className="comment-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentPost;

// Line 11: // required={true}
