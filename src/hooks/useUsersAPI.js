import {useMemo} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteUsers, editUsers, getUsers, postUsers} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useUsersAPI(handleCloseSaveModal) {

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();
    const queryClient = useQueryClient();

    const usersData = useQuery(["getUsers"], getUsers)

    const createUser = useMutation(postUsers, {
        onSuccess: (data) => {
            handleOpenAlert("success", "User created successfully");
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
            queryClient.invalidateQueries("getUsers");
        },
    });

    const editUser = useMutation(editUsers, {
        onSuccess: (data) => {
            handleOpenAlert("success", "User edited successfully");
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
            queryClient.invalidateQueries("getUsers");
        },
    });

    const deleteUser = useMutation(deleteUsers, {
        onSuccess: (data) => {
            handleOpenAlert("success", "User deleted successfully");
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
            queryClient.invalidateQueries("getUsers");
        },
    });


    return useMemo(() => ({createUser, editUser, deleteUser, usersData}), [usersData, createUser, editUser, deleteUser])
}
