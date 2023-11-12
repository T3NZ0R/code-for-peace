import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";


const Languages= () => {

    const languages = [{language:'Ukrainian', locale: "uk"}, {language:'English', locale: "en"} ];



    const [anchorElUser, setAnchorElUser] =useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const { i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
        handleCloseUserMenu()
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 0, mr: 3 }}>
                <Tooltip title={"ChangeLanguage"}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                        <LanguageIcon fontSize={"medium"} sx={{color:"white"}}/>
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
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {languages.map((language) => (
                        <MenuItem key={language.locale} onClick={()=>handleTrans(language.locale)}>
                            <Typography textAlign="center">{language.language}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
};

export default Languages;

