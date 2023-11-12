import {useMemo} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteUserFromApp, addUserToApp, getApp} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useAppsDetailAPI(handleCloseSaveModal, id) {

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();
    const queryClient = useQueryClient();

    const appsDetailData = useQuery(["getApp", id], () => getApp(id));

    const addUser = useMutation(addUserToApp, {
        onSuccess: (data) => {
            handleOpenAlert("success", "User added successfully");
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
            queryClient.invalidateQueries("getApp");
        },
    });

    const deleteUser = useMutation(deleteUserFromApp, {
        onSuccess: (data) => {
            handleOpenAlert("success", "User deleted successfully from this App");
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
            queryClient.invalidateQueries("getApp");
        },
    });

    return useMemo(() => ({appsDetailData, addUser, deleteUser}), [appsDetailData, addUser, deleteUser])
}
