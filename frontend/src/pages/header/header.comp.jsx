import React from 'react';
import {Link} from 'react-router-dom';

import './header.style.css';

const Header = () => (
    <div>
        <Link className="student-list" to='/'>Student List</Link>
        <Link className="search-client" to='/search'>Search Client</Link>
    </div>
)

export default Header;