import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  /*const {addBook} = useContext(BookContext);*/
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    /*addBook(title,author);*/
    dispatch({
      type: "ADD_BOOK",
      book: {
        title: title,
        author: author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add Book" />
    </form>
  );
};

export default NewBookForm;
