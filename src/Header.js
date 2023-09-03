import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';

import './css/header.css';

const Header = () => {
    return (
        <div className="header">

            {/* header left part */}
            <div className='header__left'>
                <IconButton>
                    <ReorderIcon />
                </IconButton>
                <img src='https://freelogopng.com/images/all_img/1682570982gmail-name-logo.png' alt='Google_logo' width='110rem' height='25px' />
            </div>

            {/* header middle part */}
            <div className='header__middle'>
                <div className='search_mail'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <input type='text' placeholder='Search mail' />
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>

            {/* header right part */}
            <div className='header__right'>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>

                <IconButton>
                    <AppsIcon />
                </IconButton>
                
                <Avatar src='https://scontent.fpat8-1.fna.fbcdn.net/v/t39.30808-6/357716410_6628646693922911_6155699300917406052_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=RRUTXilInLAAX9Z3R_i&_nc_ht=scontent.fpat8-1.fna&oh=00_AfDpakTXk4kEanDuduK4LZr8kdM4QpjWgdqzLX6eOLRC9w&oe=64F991A7' />
            </div>

        </div>
    )
}

export default Header;