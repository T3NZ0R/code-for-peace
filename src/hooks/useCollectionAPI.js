import {useMemo} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    allCollection,
    CollectionById, collectionPending, collectionStatusUpdate,
    createCollection,
    searchCollection,
    updateCollection,
} from "../services/DataService";
import {useAppState} from "../contexts/AppContext";
import {useLogout} from "./useLogout";


export function useCollectionAPI(query) {
    const queryClient = useQueryClient();

    const {handleOpenAlert} = useAppState();
    const {logout} = useLogout();

    const collectionData = useQuery(["getCollection", query], () => allCollection(query));

    const searchCollectionData = useQuery(["getCollectionSearch", query], () => searchCollection(query));

    const collectionDataById = useQuery(["getCollectionById", query],() => CollectionById(query));

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

    const collectionStatus = useMutation(collectionStatusUpdate, {
        onSuccess: () => {
        },
        onError: (err) => {
            if (err.response.status === 401) {
                logout()
            }
        }, onSettled: () => {
            queryClient.invalidateQueries("get");
        },
    });

    const collectionPendingData = useQuery(["getCollectionPending"], collectionPending);


    return useMemo(() => ({
        collectionData,
        searchCollectionData,
        collectionDataById,
        collectionUpdate,
        collectionCreate,
        collectionStatus,
        collectionPendingData
    }), [collectionData, searchCollectionData, collectionDataById, collectionUpdate, collectionCreate, collectionStatus, collectionPendingData])
}
