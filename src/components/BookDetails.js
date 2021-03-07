import React , {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ( { book } ) => {
    /*const {removeBook} = useContext(BookContext);*/
    const {dispatch} = useContext(BookContext);
    return ( 
        <div className="book-details">
            <li onClick={()=> dispatch({type : 'REMOVE_BOOK' , id : book.id})}>
                <div className="title">{book.title}</div>
                <div className="author">{book.author}</div>
            </li>

        </div>
     );
}
 
export default BookDetails;