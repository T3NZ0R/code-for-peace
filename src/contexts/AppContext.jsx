import React, {useState} from "react";

const AppStateContext = React.createContext(undefined);
const AppDispatchContext = React.createContext(undefined);

const AppProvider = ({children}) => {
    const [config, setConfig] = useState();
    const [alert, setAlert] = useState({
        isShow: false,
        type: "success",
        message: "Source created successfully",
    });

    const handleCloseAlert = () => {
        setAlert(false);
    };
    const handleOpenAlert = (type, message) => {
        setAlert({isShow: true, type: type, message});
    }


    return (
        <AppStateContext.Provider
            value={{
                config,
                handleCloseAlert,
                handleOpenAlert,
                alert
            }}
        >
            <AppDispatchContext.Provider
                value={{
                    setConfig,
                }}
            >
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
};

const useAppState = () => {
    const context = React.useContext(AppStateContext);
    if (context === undefined) {
        throw new Error("useAppState must be used within a AppProvider");
    }
    return context;
};

const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext);
    if (context === undefined) {
        throw new Error("useAppDispatch must be used within a AppProvider");
    }
    return context;
};

export {AppProvider, useAppState, useAppDispatch};
