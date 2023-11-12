import {Alert} from "./utils/alert";
import {Snackbar} from "@mui/material";
import {useAppState} from "./contexts/AppContext";
import AppRoutes from "./Routes";

const App = () => {
    const {alert, handleCloseAlert} = useAppState()
    return (
        <>

                <AppRoutes/>
                <Snackbar
                    open={alert.isShow}
                    autoHideDuration={3500}
                    anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                    onClose={handleCloseAlert}
                >
                    <Alert
                        onClose={handleCloseAlert}
                        severity={alert.type}
                        sx={{width: "100%"}}
                    >
                        {alert.message}
                    </Alert>
                </Snackbar>
        </>);
};

export default App;
