import {useMemo} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteApps, editApps, getApps, postApps} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useAppsAPI(handleCloseSaveModal) {

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();
    const queryClient = useQueryClient();

    const appsData = useQuery(["getApps"], getApps)

    const createApp = useMutation(postApps, {
        onSuccess: (data) => {
            handleOpenAlert("success", "App created successfully");
            setTimeout(() => {
                handleCloseSaveModal && handleCloseSaveModal();
            }, [1000]);
        },
        onError: (err) => {
            if (err.response.status === 401) {
                logout()
            }
            handleOpenAlert("error", err.response.data.errors[0].msg);
        },
        onSettled: () => {
            queryClient.invalidateQueries("getApps");
        },
    });

    const editApp = useMutation(editApps, {
        onSuccess: (data) => {
            handleOpenAlert("success", "App edited successfully");
            setTimeout(() => {
                handleCloseSaveModal && handleCloseSaveModal();
            }, [1000]);
        },
        onError: (err) => {
            if (err.response.status === 401) {
                logout()
            }
            handleOpenAlert("error", err.response.data.errors[0].msg);
        },
        onSettled: () => {
            queryClient.invalidateQueries("getApps");
        },
    });

    const deleteApp = useMutation(deleteApps, {
        onSuccess: (data) => {
            handleOpenAlert("success", "App deleted successfully");
            setTimeout(() => {
                handleCloseSaveModal && handleCloseSaveModal();
            }, [1000]);
        },
        onError: (err) => {
            if (err.response.status === 401) {
                logout()
            }
            handleOpenAlert("error", err.response.data.errors[0].msg);
        },
        onSettled: () => {
            queryClient.invalidateQueries("getApps");
        },
    });


    return useMemo(() => ({createApp, editApp, deleteApp, appsData}), [appsData, createApp, editApp, deleteApp])
}
