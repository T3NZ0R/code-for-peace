import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        h1: {
            fontSize: 24,
            fontWeight: 700
        },
        h2: {
            fontSize: 22,
            fontWeight: 700
        },
        h3: {
            fontSize: 20,
            fontWeight: 600
        },
        subtitle1: {
            fontSize: 14,
            fontWeight: 500
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 5,
        },
        body1: {
            fontSize: 16,
        }
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: "#272626",
                    },
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                text: {
                    "& .MuiInputBase-root": {
                        height: 50,
                        borderRadius: "8px",
                    },
                    "& legend": {display: "none"},
                    "& fieldset": {top: 0},
                },
            }
        },
        MuiTextField: {
            styleOverrides: {
               root:{
                   "& .MuiInputBase-root": {
                       height: 50,
                       borderRadius: "8px",
                   },
                   "& legend": {display: "none"},
                   "& fieldset": {top: 0},
               }

            }
        },
        MuiButton:{
            variants:[
                {
                    props: {variant: 'auth'},
                    style:{
                        color: "white",
                        marginTop: '30px',
                        height: "39.97px !important",
                        width: "100% !important",
                        borderRadius: "40px !important",
                        textTransform: "capitalize !important",
                        fontWeight: 500,
                        fontSize: "14px !important",
                        backgroundColor: "#DF4036 !important",
                        "&:hover": {
                            backgroundColor: "rgb(204,38,54) !important",
                        },
                        "&:disabled": {
                            color: "rgba(0, 0, 0, 0.26) !important",
                            boxShadow: "none !important",
                            backgroundColor: "rgba(0, 0, 0, 0.12) !important",
                        },
                    }
                }
            ]
        }
    }
});
