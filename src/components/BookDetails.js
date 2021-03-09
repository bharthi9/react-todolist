import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import PropTypes from "prop-types";

const BookDetails = ({ book }) => {
  /*const {removeBook} = useContext(BookContext);*/
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookDetails;
