import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {Cookies} from "react-cookie";
import {NavLink} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";

const Profile = () => {

    const [token, setToken] = useState(null)


    const getToken = () => {
        const cookies = new Cookies();
        const token = cookies.get('token')

        if (token) {
            setToken(token)
            return true
        } else {
            setToken(null)
            return false
        }

    }

    const authorizedUserSettings = [{name: 'Profile', path: '/login'}, {name: 'Log out', path: '/'}];

    const unauthorizedSettings = [{name: 'Log in', path: '/login'}, {name: 'Register', path: '/register'}]

    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = (event) => {
        getToken()
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const {logout} = useLogout();
    const Logout = async () => {
        setAnchorElUser(null);
        logout()
        setToken(null)
    }


    return (

        <>
            <Box sx={{flexGrow: 0}}>
                <Tooltip title={"OpenSettings"}>
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <PersonIcon fontSize={"medium"} sx={{color: "white"}}/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={!!anchorElUser}
                    onClose={handleCloseUserMenu}
                >
                    {token ? authorizedUserSettings.map((setting) => (
                            <MenuItem key={setting.path}
                                      onClick={setting.name === 'Log out' ? Logout : handleCloseUserMenu}>
                                <Typography textAlign="center"><NavLink
                                    to={setting.path}>{setting.name}</NavLink></Typography>
                            </MenuItem>
                        )) :
                        unauthorizedSettings.map((setting) => (
                            <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><NavLink
                                    to={setting.path}>{setting.name}</NavLink></Typography>
                            </MenuItem>

                        ))
                    }

                </Menu>
            </Box>

        </>
    );
};

export default Profile;
