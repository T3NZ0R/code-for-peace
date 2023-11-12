import {useCallback, useEffect, useMemo, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {getInfo} from "../services/DataService";
import {useLogout} from "./useLogout";

export function useInfoAPI() {

    const [name, setName] = useState("");

    const {logout} = useLogout();

    const infoMutation = useMutation(getInfo, {
        onSuccess: (response) => {
            setName(response.name)
            if(response?.is_expired || !response?.is_valid){
                logout()
            }
        },
        onError: () => {
            logout()
        },
    });

    const handleInfo = useCallback(async () => {
        await infoMutation.mutate();
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        handleInfo()
        let intervalId = setInterval(handleInfo, 1000 * 60)
        return (() => {
            clearInterval(intervalId)
        })
    }, [handleInfo]);

    return useMemo(() => ({name}), [name])
}


