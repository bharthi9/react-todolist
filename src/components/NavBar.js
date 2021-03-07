import React , { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className="NavBar">
            <h1>Books</h1>
            <p>Currently you have {books.length} have to go through...</p>
        </div>

     );
}
 

export default NavBar;