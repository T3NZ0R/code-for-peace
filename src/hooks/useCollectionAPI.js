import {useMemo} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {
    allCollection,
    CollectionById, createCollection,

    updateCollection
} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useCollectionAPI() {

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();

    const collectionData = useQuery(["getCollection"], allCollection);

    const collectionDataById = useQuery(["getCollectionById"], CollectionById);


    const collectionUpdate = useMutation(updateCollection, {
        onSuccess: () => {
            handleOpenAlert("success", "Collection updated successfully");
        },
        onError: (err) => {
            if (err.response.status === 401) {
                logout()
            }
        }
    });

    const collectionCreate = useMutation(createCollection, {
        onSuccess: () => {
            handleOpenAlert("success", "Collection updated successfully");
        },
        onError: (err) => {
            if (err.response.status === 401) {
                logout()
            }
        }
    });



    return useMemo(() => ({collectionData, collectionDataById, collectionUpdate, collectionCreate}), [collectionData, collectionDataById, collectionUpdate, collectionCreate])
}
