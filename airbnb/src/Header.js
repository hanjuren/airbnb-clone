import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="header__icon" 
            src="https://i.pinimg.com/564x/04/57/14/0457144332ce38550077355621165d24.jpg" alt="" />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
                
            </div>

        </div>
    )
}

export default Header