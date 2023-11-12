import {useMemo} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {
    allCollection,
    CollectionById,
    createCollection,
    searchCollection,
    updateCollection
} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useCollectionAPI(query) {

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();

    const collectionData = useQuery(["getCollection", query], () => allCollection(query));

    const searchCollectionData = useQuery(["getCollection", query], () => searchCollection(query));

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


    return useMemo(() => ({
        collectionData,
        searchCollectionData,
        collectionDataById,
        collectionUpdate,
        collectionCreate
    }), [collectionData, searchCollectionData, collectionDataById, collectionUpdate, collectionCreate])
}
