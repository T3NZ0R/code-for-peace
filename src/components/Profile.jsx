import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const Profile = () => {

    const settings = [{name:'Profile', path:'/login'}, {name:'Logout', path:'/'}];

    const [anchorElUser, setAnchorElUser] = useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={"OpenSettings"}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                        <PersonIcon fontSize={"medium"} sx={{color:"white"}}/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
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
                    {settings.map((setting) => (
                        <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center"><a href={setting.path}>{setting.name}</a></Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

        </>
    );
};

export default Profile;
