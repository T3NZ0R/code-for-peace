import {useMemo} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {editAdmins, getAdmins, postAdmins} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useAdminsAPI(handleCloseSaveModal) {

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();
    const queryClient = useQueryClient();

    const adminsData = useQuery(["getAdmins"], getAdmins)

    const createAdmin = useMutation(postAdmins, {
        onSuccess: (data) => {
            handleOpenAlert("success", "Admin created successfully");
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
            queryClient.invalidateQueries("getAdmins");
        },
    });

    const editAdmin = useMutation(editAdmins, {
        onSuccess: (data) => {
            handleOpenAlert("success", "Admin edited successfully");
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
            queryClient.invalidateQueries("getAdmins");
        },
    });


    return useMemo(() => ({createAdmin, editAdmin, adminsData}), [adminsData, createAdmin, editAdmin])
}
