import { createContext, useState } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {

  const [comment, setComment] = useState([]);

  const context = {
    comment, setComment,
  };

  return (
    <CommentContext.Provider value={context}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
