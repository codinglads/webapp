import React, { useState } from "react";
import './SettingsPage.css'
import Switch from '@mui/material/Switch'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Layout } from '../components/Layout';

function SettingsPage(){

    const theme = createTheme ({
        palette: {
          primary: {
            main: '#7bda57',
          },
        },
      });

    const languages = [
        {
            value: 'English',
            label: 'English',
        },
        {
            value: 'Spanish',
            label: 'Spanish',
        },
        {
            value: 'French',
            label: 'French',
        },
        {
            value: 'Portuguese',
            label: 'Portuguese',
        },
    ];
    
    const [language, setLanguage] = React.useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Layout>
            <ThemeProvider theme ={theme}>
            <div className="SettingsPage">
            <div className="container my-7">
                <div id="settingsHeader">
                     <h1>Settings</h1>
                </div>
                <div>

                        <div className="mt-5 mt-2">
                                <h3>My Location</h3>
                                <hr/>
                            <div>
                                    <div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <Tooltip title="Are you a local?" placement="bottom-start">
                                                    <h6 className="font-weight-bold" >Toggle Locality</h6>
                                                 </Tooltip>
                                                <FormControlLabel className="mt-3" control={<Switch color="primary"/>} label="Syracuse"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <Tooltip title="Where are you a local?" placement="bottom-start">
                                                    <h6 className="font-weight-bold" >Add Local Spot</h6>
                                                    </Tooltip>
                                                <TextField className="mt-3"
                                                    margin="normal"
                                                    fullWidth
                                                    color="primary"
                                                    label="Add Local Spot" 
                                                />
                                                <Button variant="contained">
                                                    Add
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-5 mt-2">
                                <h3>Manage Account</h3>
                                <hr/>
                            <div>
                                    <div>
                                        
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <h6 className="font-weight-bold" >Change Username</h6>
                                                <TextField className="mt-3"
                                                    margin="normal"
                                                    fullWidth
                                                    color="primary"
                                                    label="New Username"
                                                />
                                                <Button variant="contained">
                                                    Update
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <h6 className="font-weight-bold" >Change Password</h6>
                                                <TextField className="mt-3"
                                                    margin="normal"
                                                    fullWidth
                                                    color="primary"
                                                    type="password"
                                                    label="Old Password"
                                                />

                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    color="primary"
                                                    label="New Password"
                                                />
                                                <Button variant="contained">
                                                    Update
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-5 mt-2">
                                <h3>Accessibility</h3>
                                <hr/>
                            <div>
                                    <div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <h6 className="font-weight-bold" >Toggle Dark Mode</h6>
                                                <Switch className="mt-3" color="primary"/>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-5 mt-2">
                                <h3>Language</h3>
                                <hr/>
                            <div>
                                    <div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <h6 className="font-weight-bold" >Change Language</h6>
                                                <TextField className="mt-3"
                                                    select
                                                    color="primary"
                                                    label="Select"
                                                    value={language}
                                                    onChange={handleChange}
                                                    helperText="Please select your language"
                                                >
                                                    {languages.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>  
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-5 mt-2">
                                <h3>Privacy</h3>
                                <hr/>
                            <div>
                                    <div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <h6 className="font-weight-bold" >Toggle Location Tracking</h6>
                                                <Switch className="mt-3" color="primary"/>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-5 mt-2">
                                <h3>Help</h3>
                                <hr/>
                            <div>
                                    <div>
                                        <div className="list-group">
                                            <div className="list-group-item mb-2">
                                                <h6 className="font-weight-bold" >Customer Support</h6>
                                                <TextField className="mt-3"
                                                    margin="normal"
                                                    fullWidth
                                                    label="How can we help?"

                                                />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="mt-5"></div>
                </div>
            </div>            
        </div>
        </ThemeProvider>   
        </ Layout>
        )
}

export default SettingsPage;