import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        }
    }
});

export default function HomeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                            size="small"
                        sx={{ ml: 2, bgColor: 'black' }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32, backgroundColor: 'black' }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem component={Link} to="/signin">
                    <Avatar /> Sign In/Sign Up
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                    <MenuItem component={Link} to="/settings">
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            </React.Fragment>
        </ThemeProvider>
    );
}


/*import React, { Component } from 'react';

import './HomeMenu.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export class HomeMenu extends Component {
    static displayName = HomeMenu.name;




    render() {
        return (
            <div id="HomeMenuContainer">
                <MenuRoundedIcon fontSize="large"/>
            </div>
        );
    }
}


<Typography sx={{ minWidth: 100 }}>
                        <Link to="/syracuse" style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold'
                        }}>Syracuse</Link>
                 </Typography>
                 <Typography sx={{ minWidth: 100 }}>
                    <Link to="/counter" style={{
                        textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold'
                    }}>Counter</Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link to="/fetch-data" style={{
                        textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold'
                    }}>Fetch Data</Link>
                </Typography>

*/