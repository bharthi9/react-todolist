import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../Reducers/BookReducer";
import PropTypes from "prop-types";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  /*const [books , setBooks] = useState*/
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider
      value={{ books, dispatch /*, addBook , removeBook*/ }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
BookContextProvider.propTypes = {
  children: PropTypes.node,
};

export default BookContextProvider;
