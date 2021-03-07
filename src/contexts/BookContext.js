/* import React , {createContext , useState } from 'react';
import {v1} from 'uuid';*/
import React , { createContext , useReducer , useEffect } from 'react';
import { BookReducer } from '../Reducers/BookReducer';


export const BookContext = createContext();

const BookContextProvider = (props)=> {
    /*const [books , setBooks] = useState*/
    const [books , dispatch] = useReducer(BookReducer , [] , ()=> {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    /*const addBook = (title , author)=> {
        setBooks([...books, {title : title , author : author , id : v1()}])
    }
    const removeBook = (id)=> {
        setBooks(books.filter(book => book.id !== id))
    }*/
    useEffect(() => {
        localStorage.setItem('books' , JSON.stringify(books))
    } , [books]);
    return(
        <BookContext.Provider value={{books , dispatch /*, addBook , removeBook*/}}>
            { props.children }
        </BookContext.Provider>
    )
}
export default BookContextProvider;

