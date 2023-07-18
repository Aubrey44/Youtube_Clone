import { createContext, useState } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const context = {
    comments,
    setComments,
  };

  return (
    <CommentContext.Provider value={context}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
